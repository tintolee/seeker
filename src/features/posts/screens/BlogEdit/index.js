import React, {useEffect, useRef, useState} from 'react';
import {Alert, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import * as actions from '../../_redux/actions';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  s3Bucket,
  region,
  uploadImage,uploadFile} from '../../../../hooks/useUploadImage';
import {resizeImage} from '../../../../utils/FileResizer';
import {
  TextInput,
  ImagePicker,
  MultilineTextInputField,
  LinkSelection,
  MultiSelect,
  Button,
  VisibilityChange,
} from '../../../../components/form';
import styles from './styles';

const initialValues = {
  id: undefined,
  type: 'BLOG',
  title: '',
  caption: '',
  description: '',
  coverPhoto: '',
  visibility: 1,
  status: 1,
  routeMap: undefined,
};

export default function BlogEdit({route}) {
  const [postForEdit, setPostForEdit] = useState(undefined);
  const navigation = useNavigation();
  const refForm = useRef();

  const id = route.params?.id;
  const previousScreen = route.params?.previousScreen;

  const dispatch = useDispatch();
  const {user, postDetail} = useSelector(
    (state) => ({
      user: state.seekerReducer.seeker,
      postDetail: state.postsReducer.postDetail,
    }),
    shallowEqual,
  );

  useEffect(() => {
    if (refForm.current) {
      const routeMap = route.params?.routeMap;
      if (routeMap) {
        refForm.current.setFieldValue('routeMap', routeMap);
      }
    }
  }, [route.params]);

  useEffect(() => {
    dispatch(actions.fetchPost(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (postDetail && id) {
      navigation.setOptions({
        title: 'Edit Blog',
      });

      setPostForEdit({
        id: postDetail.id,
        caption: postDetail.caption,
        title: postDetail.blog?.blogTitle,
        description: postDetail.blog?.blogDescription,
        photo: postDetail.photo?.length == !0 && postDetail.photo[0],
        visibility: postDetail.visibility,
        status: postDetail.status,
        routeMap: postDetail.routeMap,
      });
    }
  }, [postDetail, id]);

  const handleOnSubmit = async (values, {setStatus, setSubmitting}) => {
    setSubmitting(true);

    try {
      const input = {
        type: values.type,
        caption: values.caption,
        status: values.status,
        visibility: values.visibility,
        blog: {
          blogTitle: values.title,
          blogDescription: values.description,
          visibility: values.visibility,
        },
        postSeekerId: user.id,
        postRouteMapId: values?.routeMap?.id,
      };

      if (id && values?.photo?.key) {
        input.photo = [values.photo];
      } else {
        let image;
        if (!values.photo) {
          image = await uploadFile(input.photo);
          input.photo = image;
        }
      }

      if (id) {
        input.id = id;
        dispatch(actions.updatePost(input)).then(() => {
          setSubmitting(false);
          navigation.navigate(previousScreen, {
            forceUpdate: new Date().toLocaleString(),
          });
        });
      } else {
        dispatch(actions.createPost(input)).then(() => {
          setSubmitting(false);
          navigation.navigate(previousScreen, {
            forceUpdate: new Date().toLocaleString(),
          });
        });
      }
    } catch (e) {
      setSubmitting(false);
      console.log(e);
    }
  };

  const onPhotoPickChange = async (imageUrl, fieldName, callback) => {
    try {
      const config = {
        maxWidth: 500,
        maxHeight: 500,
        compressFormat: 'JPEG',
        quality: 100,
      };

      const resizedImage = await resizeImage(imageUrl, config);

      callback(fieldName, resizedImage.path);
    } catch (err) {
      console.log(err);
    }
  };

  const BlogEditSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    caption: yup.string(),
    photo: yup.mixed(),
    visibility: yup.string().required(),
    routeMap: yup.object().shape({
      id: yup.string(),
    }),
  });

  return (
    <View style={styles.container}>
      <Formik
        innerRef={refForm}
        enableReinitialize
        initialValues={postForEdit || initialValues}
        validationSchema={BlogEditSchema}
        onSubmit={handleOnSubmit}>
        {({
          handleSubmit,
          values,
          setFieldValue,
          handleChange,
          touched,
          errors,
          isValid,
          isSubmitting,
        }) => (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardDismissMode={'on-drag'}>
              <View style={styles.content}>
                <View style={styles.field}>
                  <TextInput
                    fieldTitle="Blog title"
                    placeholder="Enter blog title"
                    value={values.title}
                    onChangeText={handleChange('title')}
                    hasError={touched.title && errors.title}
                  />
                </View>
                <View style={styles.field}>
                  <MultilineTextInputField
                    caption="What do you want to say?"
                    maxLength={10000}
                    value={values.description}
                    onChangeText={handleChange('description')}
                    hasError={touched.description && errors.description}
                  />
                </View>
                <View style={styles.field}>
                  <MultilineTextInputField
                    caption="Why not add a caption?"
                    maxLength={5000}
                    autoCorrect={true}
                    value={values.caption}
                    onChangeText={handleChange('caption')}
                    hasError={touched.caption && errors.caption}
                  />
                </View>
                <View style={styles.field}>
                  <LinkSelection
                    fieldTitle="Link an opportunity or collaboration"
                    onPress={() => Alert.alert('Coming soon...')}
                  />
                </View>
                <View style={styles.field}>
                  <MultiSelect
                    fieldTitle="Tag friends, collaborators or opportunity providers"
                    onPress={() => Alert.alert('Coming soon...')}
                  />
                </View>
                <View style={styles.field}>
                  <ImagePicker
                    fieldTitle="Add a cover photo (Optional)"
                    placeholder="This will display at the top of your blog"
                    hasError={touched.photo && errors.photo}
                    imageUrl={values.photo}
                    setImageUrl={(imageUrl) => {
                      onPhotoPickChange(imageUrl, 'photo', setFieldValue);
                    }}
                  />
                </View>
                <View style={styles.field}>
                  <MultiSelect
                    fieldTitle="Route map (Optional)"
                    values={values.routeMap && values.routeMap.id}
                    text={values.routeMap && values.routeMap.destination}
                    onPress={() =>
                      navigation.navigate('SelectRouteMap', {
                        seekerId: user.id,
                        previousScreen: 'BlogEdit',
                      })
                    }
                  />
                </View>
                <View style={styles.field}>
                  <VisibilityChange
                    value={values.visibility}
                    setValue={(value) => setFieldValue('visibility', value)}
                  />
                </View>
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <SafeAreaView edges={['bottom']}>
                <Button
                  title={'Post Blog'}
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                />
              </SafeAreaView>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

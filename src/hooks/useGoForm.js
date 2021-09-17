import {useFormik} from 'formik';
import {goSchema} from 'util/types';

export default function useGoForm(formikProps) {
	return useFormik({
		initialValues: {
			alias: '',
			href: '',
		},
		validationSchema: goSchema,
		validateOnBlur: true,
		...formikProps,
	});
}

import { Field, withTypes } from 'react-final-form';

type MyValues = {
    username: string;
    password: string;
};
const { Form } = withTypes<MyValues>();

const onSubmit = async (values: any) => {
    console.log(values);
};

export default function MyForm() {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" component="input" type="text" placeholder="First Name" />
                    </div>

                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        />
    );
}

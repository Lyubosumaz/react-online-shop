import React, { useEffect, useState } from 'react';
import { Field } from 'react-final-form';

interface Test {
    delay: number;
    active: any;
    dirty: any;
    error: any;
    touched: any;
    children: any;
    name?: any;
}

const DisplayError = ({ delay, active, dirty, error, touched, children }: Test) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let timeout: any;
        if (active && error && dirty) {
            console.info('setting timeout');
            timeout = setTimeout(() => setShow(true), delay);
        }
        return () => {
            console.info('clearing timeout');
            clearTimeout(timeout);
        };
    }, [delay, error, active, dirty]);

    return error && ((touched && !active) || (touched && !show && active) || show) ? children(error) : null;
};

const ErrorWithDelay = ({ name, children, delay }: Test) => (
    <Field name={name} subscription={{ active: true, error: true, dirty: true, touched: true }}>
        {({ meta: { active, dirty, error, touched } }) => <DisplayError delay={delay} active={active} dirty={dirty} error={error} touched={touched} children={children} />}
    </Field>
);

export default ErrorWithDelay;

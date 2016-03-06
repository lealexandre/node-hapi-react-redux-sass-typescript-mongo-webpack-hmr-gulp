/// <reference path='../../../../../../../typings/tsd.d.ts' />

// Core Imports
import * as React from 'react';
import { connect } from 'react-redux';

// Styles
import './_PasswordForm.scss';

// Page Components
import { ControlGroup } from '../../../signup/components/Form/components/ControlGroup/ControlGroup';
import { TextControl } from '../../../signup/components/Form/components/TextControl/TextControl';
import { Button } from '../../../signup/components/Form/components/Button/Button';
import { Spinner } from '../../../signup/components/Form/components/Spinner/Spinner';

// Behaviors and Actions
import {
    onFormInit,
    onFormUpdate,
    saveUserSettings,
    IAccountMapping
} from '../../actions';

// Interfaces
interface IPasswordFormProps {
    dispatch?: (func: any) => void;
    store?: any;
    data?: any;
    error?: boolean;
    success?:  boolean;
    username?: boolean;
    password?: string;
    passwordConfirm?: string;
    hasError?: any;
    help?: any;
    loading?: boolean;
}

interface IPasswordFormState {

}

// Decorators
function select(state: { account: IAccountMapping; }): IPasswordFormState {
    const { account }: { account: IAccountMapping; } = state;
    const {
        password,
        passwordConfirm,
        hasError,
        help,
        loading,
        success,
        error
    }: IAccountMapping = account;

    return {
        password,
        passwordConfirm,
        hasError,
        help,
        loading,
        success,
        error
    };

}

@connect(select)
export class PasswordForm extends React.Component<IPasswordFormProps, IPasswordFormState> {

    public constructor(props: any = {}) {
        super(props);
    }

    public componentDidMount(): void {
        // this.refs.nameControl.refs.inputField.getDOMNode().focus();
        const { dispatch }: IPasswordFormProps = this.props;
        dispatch(onFormInit());
    }

    public handleChange(event: any): void {
        const { dispatch }: IPasswordFormProps = this.props;
        dispatch(
            onFormUpdate(event.target.name, event.target.value)
        );
    }

    public onSubmit(event: any): void {

        event.preventDefault();
        event.stopPropagation();

        const {
            dispatch,
            password,
            passwordConfirm
        }: IPasswordFormProps = this.props;

        dispatch(
            saveUserSettings({
                password,
                passwordConfirm
            })
        );
    }

    public render(): React.ReactElement<{}> {

        let alerts: any[] = [];

        let {
            password,
            passwordConfirm,
            hasError,
            help,
            loading,
            success,
            error
        }: IPasswordFormProps = this.props;

        if (success) {
            alerts.push(<div key='success' className='alert alert-success'>
                Success. New password set.
            </div>);
        } else if (error) {
            alerts.push(<div key='danger' className='alert alert-danger'>
                {error}
            </div>);
        }

        return (
            <form onSubmit={(e: any) => this.onSubmit(e) }>
                <fieldset>
                    <legend>Password</legend>
                    {alerts}
                    <TextControl
                        name='password'
                        label='New password'
                        type='password'
                        hasError={hasError.password}
                        value={password}
                        onChange={ (e: any) => this.handleChange(e) }
                        help={help.password}
                        disabled={loading}
                        />
                    <TextControl
                        name='passwordConfirm'
                        label='Confirm new password'
                        type='password'
                        hasError={hasError.passwordConfirm}
                        value={passwordConfirm}
                        onChange={ (e: any) => this.handleChange(e) }
                        help={help.passwordConfirm}
                        disabled={loading}
                        />
                    <ControlGroup hideLabel={true} hideHelp={true}>
                    <Button
                        type='submit'
                        inputClasses={{ 'btn-primary': true }}
                        disabled={loading}>

                        Set password
                        <Spinner space='left' show={loading} />
                    </Button>
                </ControlGroup>
                </fieldset>
            </form>
        );
    }
}

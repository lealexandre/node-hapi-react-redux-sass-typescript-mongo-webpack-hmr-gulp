/// <reference path='../../../../../../../typings/tsd.d.ts' />

// Core Imports
import * as React from 'react';
// import { connect } from 'react-redux';

// Styles
import './_Logout.scss';

// Page Components


// Behaviors and Actions
import {
} from '../../actions';

// Interfaces
interface ILogoutProps {
    dispatch?: (func: any) => void;
    store?: any;
}

interface ILogoutState {

}

// Decorators
/*
function select(state: { account: IAccountMapping; }): ILogoutState {
    const { account }: { account: IAccountMapping; } = state;
    const {
        password,
        passwordConfirm,
        hasError,
        help,
        loading,
        passwordsuccess,
        error
    }: IAccountMapping = account;

    return {
        password,
        passwordConfirm,
        hasError,
        help,
        loading,
        passwordsuccess,
        error
    };

}

@connect(select)*/
export class Logout extends React.Component<ILogoutProps, ILogoutState> {

    public constructor(props: any = {}) {
        super(props);
    }

    public componentDidMount(): void {
        // this.refs.nameControl.refs.inputField.getDOMNode().focus();
        // const { dispatch }: ILogoutProps = this.props;
        // dispatch(onFormReset());
        // dispatch(onFormInit());
    }

    /*
    public handleChange(event: any): void {
        const { dispatch }: ILogoutProps = this.props;
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
        }: ILogoutProps = this.props;

        dispatch(
            savePasswordSettings({
                password,
                passwordConfirm
            })
        );
    }
    */

    public render(): React.ReactElement<{}> {

        return (
            <div>Logout Section</div>
        );
    }
}
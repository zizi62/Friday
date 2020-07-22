import React from 'react';
import style from './modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { modalWindow } from '../../Redux/modalReducer';

const ModalWindow = (props: any) => {
	const dispatch = useDispatch();

	const hideModal = () => {
		dispatch(modalWindow())
	}

	return (
		<div 
			className={style.modalWrapper}
			onClick={hideModal}
		>
			Hi
		</div>
	)
}

export default ModalWindow;
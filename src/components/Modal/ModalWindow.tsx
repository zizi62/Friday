import React from 'react';
import style from './modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../Redux/store';
import { modalWindow } from '../../Redux/modalReducer';

/*
cardsCount: 0
created: "2020-07-23T15:39:04.414Z"
grade: 0
name: "tyutyu"
path: "/def"
private: false
rating: 0
shots: 0
type: "pack"
updated: "2020-07-23T15:39:04.414Z"
user_id: "5ef38ea5f2352600043720e6"
user_name: "SantYaga"
__v: 0
_id: "5f19af1814843100042b706b"*/

const CardModal = (props: any) => {
	let {grade, name, rating, user_name} = props;

	return (
		<>
		<label htmlFor="field_name">
			<span>Name</span>
			<input type="text" value={name} id="field_name"/>
		</label>

		<label htmlFor="field_user-name">
			<span>User Name</span>
			<input type="text" value={user_name} id="field_user-name"/>
		</label>

		<label htmlFor="grade">
			<span>Grade</span>
			<input type="text" value={grade} id="grade"/>
		</label>

		<label htmlFor="rating">
			<span>Rating</span>
			<input type="text" value={name} id="rating"/>
		</label>
		</>
	)
}


const ModalWindow = (props: any) => {
	const dispatch = useDispatch();

	const hideModal = () => {
		dispatch(modalWindow())
	}

	return (
		<div 
			onClick={hideModal}
			className={style.modal}
		>
			<div className={style.modalContainer}>
				<CardModal />
			</div>
		</div>
	)
}

export default ModalWindow;
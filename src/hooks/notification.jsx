import React from "react";
import { Alert, Toast, ToastContainer } from "react-bootstrap";

const useNotification = (variant = null, user = "Пользователь") => {
  const [show, setShow] = React.useState(true);
  if (variant === "success") {
    return (
      <ToastContainer position="top-end" className="mt-3 p-3 pt-5">
        <Toast show={show} onClose={() => setShow(false)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Успешно вошли в систему</strong>
            <small>Сейчас</small>
          </Toast.Header>
          <Toast.Body>Здавствуй {user}!</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  } else if (variant === "error") {
    return (
      <ToastContainer position="top-center" className="p-3">
        <Toast show={show} onClose={() => setShow(false)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-danger">Ошибка</strong>
            <small>Сейчас</small>
          </Toast.Header>
          <Toast.Body>
            Здавствуйте, вы ввели неправльные данные для авторизации, пожалуйста
            попробуйте ещё раз
          </Toast.Body>
        </Toast>
      </ToastContainer>
    );
  } else if (variant === null) {
    return null;
  }
};

export default useNotification;

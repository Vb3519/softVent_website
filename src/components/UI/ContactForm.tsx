import React from 'react';

const ContactForm = () => {
  return (
    <form
      className="max-w-[550px] m-auto flex flex-col gap-8 p-4 elem-shadow rounded-2xl text-[14px] leading-[20px] sm:text-[16px] lg:text-[18px] lg:leading-[25px] 2xl:m-0"
      action=""
      method="post"
    >
      <h3 className="text-center font-[600]">
        Закажите бесплатную консультацию
      </h3>
      <fieldset className="flex flex-col gap-3 items-center">
        <label className="w-[100%] text-left" htmlFor="name">
          Как к Вам обращаться?
        </label>
        <input
          className="w-[100%] p-2 bg-gray-200 rounded-md outline-none"
          type="text"
          name="name"
          required
          maxLength={20}
          placeholder="Ваше имя"
        />

        <label className="w-[100%] text-left" htmlFor="phone">
          Введите Ваш номер телефона
        </label>
        <input
          className="w-[100%] p-2 bg-gray-200 rounded-md outline-none"
          type="tel"
          name="phone"
          required
          maxLength={20}
          placeholder="+7 (___) ___-__-__"
        />
        <button
          className="w-[50%] mt-5 p-2 text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] cursor-pointer"
          type="submit"
        >
          Отправить
        </button>
        <p className="">
          Нажимая кнопку "Отправить", вы соглашаетесь с{' '}
          <a className="text-[#1B9AE9]" href="#">
            политикой конфиденциальности
          </a>{' '}
          и{' '}
          <a className="text-[#1B9AE9]" href="#">
            договором оферты
          </a>
        </p>
      </fieldset>
    </form>
  );
};

export default ContactForm;

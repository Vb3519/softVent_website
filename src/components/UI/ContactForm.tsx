import React from 'react';

interface ContactForm_Type {
  className?: string;
  title: string;
}

const ContactForm: React.FC<ContactForm_Type> = ({ className, title }) => {
  return (
    <form
      className={`max-w-[750px] m-auto mt-8 flex flex-col gap-8 p-4 elem-shadow rounded-2xl text-[14px] leading-[20px] sm:text-[16px] lg:mt-0 lg:text-[18px] lg:leading-[25px] ${className}`}
      action=""
      method="post"
    >
      <h3 className="text-center font-[600]">{title}</h3>
      <fieldset className="flex flex-col gap-3 items-center">
        <label className="w-[100%] max-w-[500px] text-left" htmlFor="name">
          Как к Вам обращаться?
        </label>
        <input
          className="w-[100%] max-w-[500px] p-2 bg-gray-200 rounded-md outline-none"
          type="text"
          name="name"
          required
          maxLength={20}
          placeholder="Ваше имя"
        />

        <label className="w-[100%] max-w-[500px] text-left" htmlFor="phone">
          Введите Ваш номер телефона
        </label>
        <input
          className="w-[100%] max-w-[500px] p-2 bg-gray-200 rounded-md outline-none"
          type="tel"
          name="phone"
          required
          maxLength={20}
          placeholder="+7 (___) ___-__-__"
        />
        <button
          className="w-[50%] mt-5 p-2 text-center bg-gradient-to-r from-blue-400 to-blue-500 rounded-md text-[whitesmoke] font-[500] cursor-pointer hover:shadow-[0px_0px_10px_rgba(0,0,0,0.4)]"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Отправить
        </button>
        <p className="">
          Нажимая кнопку "Отправить", вы соглашаетесь с{' '}
          <a
            className="text-[#1B9AE9]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            политикой конфиденциальности
          </a>{' '}
          и{' '}
          <a
            className="text-[#1B9AE9]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            договором оферты
          </a>
        </p>
      </fieldset>
    </form>
  );
};

export default ContactForm;

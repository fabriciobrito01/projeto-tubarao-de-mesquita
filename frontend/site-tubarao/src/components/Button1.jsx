function Button1({ onClick, children }) {
  return (
    <>
      <style>
        {`
          .button1 {
            background-color: #CB910F;
            border: 1px solid #CB910F;
            color:  #fff;
            padding: 9px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1rem;
            margin: 6px 3px;
            cursor: pointer;
            border-radius: 25px;
            font-family: 'Lexend', sans-serif;
            font-weight: 600;
            transition: background 0.2s, transform 0.2s;
          }
          .button1:hover {
            transform: scale(1.08);
          }
        `}
      </style>
      <button onClick={onClick} className="button1">
        {children}
      </button>
    </>
  );
}

export default Button1;
function Button2({ onClick, children }) {
  return (
    <>
      <style>
        {`
          .button2 {
            background-color: #fff;
            border: 1px solid #CB910F;
            color:  #CB910F;
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
          .button2:hover {
            transform: scale(1.08);
          }
        `}
      </style>
      <button onClick={onClick} className="button2">
        {children}
      </button>
    </>
  );
}

export default Button2;
/* eslint-disable react/prop-types */

const TranslateSelect = ({ language, changeLanguage }) => {
  return (
    <div className="text-black flex justify-center items-center">
      <select
        className="rounded-md text-sm "
        defaultValue={language}
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="id">Indonesian</option>
        <option value="ja">Japanese</option>
      </select>
    </div>
  );
};

export default TranslateSelect;

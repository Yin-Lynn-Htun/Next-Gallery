const FormInput = ({ name, type, value, handleChange, placeholder }) => (
    <div className="flex flex-col text-white">
        <label htmlFor="item-name" className="my-3 text-lg">
            {name}
        </label>
        <input
            type={type || 'text'}
            id="item-name"
            placeholder={placeholder}
            className="p-3 border-black border-2 rounded-md text-black"
            value={value}
            onChange={handleChange}
        />
    </div>
)

export default FormInput

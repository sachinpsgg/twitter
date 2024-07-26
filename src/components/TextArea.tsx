import Label from "./Label";

const TextArea: React.FC<{ id: string, register: any, error: boolean, placeholder: string }> = ({ id, register, error, placeholder }) => (
    <div className="relative">
        <Label
            id={id}
            label="Tweet Content"
            required
            error={error}
        />
        <textarea
            id={id}
            {...register(id, { required: 'Content is required' })}
            placeholder={placeholder}
            className={`w-full p-2 pr-16 border ${error ? 'border-red-500' : 'border-gray-300'} bg-gray-950 text-white rounded relative`}
        />
    </div>
);
export default TextArea;
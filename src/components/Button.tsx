'use client';

interface ButtonProps {
  onClick: () => void;
  label: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  primary
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex 
        items-center 
        px-4 
        py-2 
        text-md 
        rounded-full
        ${primary ? 'border-primary-green' : 'border-black'}
        ${primary ? 'bg-primary-green' : 'bg-white'}
        ${primary ? 'hover:bg-white' : 'hover:bg-black'}
        ${primary ? 'hover:text-primary-green' : 'hover:text-white'}
        ${primary ? 'text-white' : 'text-black'}
        border-2
        font-bold
        cursor-pointer
        transition 
        duration-300
    `}>
      {label}
    </div>
  )
};

export default Button;


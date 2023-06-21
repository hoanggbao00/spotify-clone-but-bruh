import * as SliderPrimitive from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

interface SliderProps {
  value: number[];
  onChange?: (value: number) => void;
  thumbColor?: string;
  rangeColor?: string;
  BgTrack?: string;
  height?: number;
  thumbSize?: number;
  className?: string;
  label?: string;
}

const Slider: React.FC<SliderProps> = (
  {
    value,
    onChange,
    thumbColor,
    rangeColor,
    BgTrack,
    height,
    thumbSize,
    className,
    label = 'volume',
  },
  props
) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <SliderPrimitive.Root
      defaultValue={[1]}
      value={value}
      onValueChange={handleChange}
      max={label === 'volume' ? 1 : 10}
      step={0.1}
      aria-label={label}
      className={twMerge(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={`relative h-${
          height ? height : 2
        } w-full grow overflow-hidden rounded-full ${
          BgTrack ? BgTrack : 'bg-transparent'
        }`}
      >
        <SliderPrimitive.Range
          className={`absolute h-full ${
            rangeColor ? rangeColor : 'bg-green-500'
          }`}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={`block h-${thumbSize ? thumbSize : 4} w-${
          thumbSize ? thumbSize : 4
        } rounded-full hover:scale-110 cursor-pointer ${
          thumbColor ? thumbColor : 'bg-white'
        } transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`}
      />
    </SliderPrimitive.Root>
  );
};

export default Slider;

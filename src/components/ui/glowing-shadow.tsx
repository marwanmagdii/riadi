import React, { CSSProperties, ReactNode, HTMLAttributes } from 'react';

type GlowMode = 'static' | 'pulse' | 'breathe' | 'color-shift';

interface GlowingShadowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  children: ReactNode;
  className?: string;
 
  // Glow customization
  glowMode?: GlowMode;
  glowColor?: string;
  glowSpread?: number; // Spread radius in px
  glowBlur?: number; // Blur radius in px
  glowOpacity?: number; // 0 to 1
  glowAnimationSpeed?: number; // Duration in seconds
 
  // Container styling
  borderRadius?: number;
  backgroundColor?: string;
  style?: CSSProperties;
}

const GlowingShadow: React.FC<GlowingShadowProps> = ({
  children,
  className = '',
  glowMode = 'static',
  glowColor = '#22c55e', // Default to a green accent
  glowSpread = 5,
  glowBlur = 20,
  glowOpacity = 0.5,
  glowAnimationSpeed = 3,
  borderRadius = 16,
  backgroundColor = '#0A0E0C',
  style = {},
  ...props
}) => {
  // Generate the base box-shadow string
  const getBoxShadow = () => {
    // Convert hex to rgba for opacity control if needed
    // Assuming glowColor is a valid CSS color string
    return `0 0 ${glowBlur}px ${glowSpread}px ${glowColor}`;
  };
 
  // Determine animation class based on mode
  const getAnimationClass = () => {
    switch (glowMode) {
      case 'pulse':
        return 'animate-pulse';
      case 'breathe':
        return 'animate-breathe'; // Requires custom keyframes in tailwind/css
      case 'color-shift':
        return 'animate-color-shift'; // Requires custom keyframes in tailwind/css
      default:
        return '';
    }
  };
 
  const combinedStyle: CSSProperties = {
    '--glow-color': glowColor,
    '--glow-spread': `${glowSpread}px`,
    '--glow-blur': `${glowBlur}px`,
    '--glow-opacity': glowOpacity,
    '--animation-duration': `${glowAnimationSpeed}s`,
    borderRadius: `${borderRadius}px`,
    backgroundColor: backgroundColor,
    boxShadow: getBoxShadow(),
    opacity: glowMode === 'static' ? glowOpacity : undefined, // Let animation handle opacity if not static
    ...style,
  } as CSSProperties;
 
  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${getAnimationClass()} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {/* Optional: Add an inner container if you want the content to have a different background */}
      <div className="relative z-10 h-full w-full rounded-[inherit] bg-inherit">
        {children}
      </div>
    </div>
  );
};

export { GlowingShadow };

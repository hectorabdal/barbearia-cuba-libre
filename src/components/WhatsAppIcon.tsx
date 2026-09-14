type WhatsAppIconProps = {
  size?: number;
  className?: string;
};

export function WhatsAppIcon({ size = 18, className }: WhatsAppIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.13 2 11.23c0 1.94.63 3.74 1.7 5.24L2.4 21.2a.6.6 0 0 0 .74.75l4.9-1.42a10.6 10.6 0 0 0 3.96.77c5.52 0 10-4.13 10-9.24C22 6.13 17.52 2 12 2z" />
    </svg>
  );
}

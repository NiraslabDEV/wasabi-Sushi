"use client";

export default function ConciergeFloat() {
  const whatsappNumber = "258846007007";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-surface-bright text-secondary p-4 rounded-full shadow-2xl flex items-center gap-3 border border-secondary/20 hover:scale-105 transition-all glass-nav group"
    >
      <span className="font-bold text-xs tracking-widest uppercase pl-2 group-hover:text-secondary-fixed-dim transition-colors">
        Concierge
      </span>
      <div className="bg-primary p-2 rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-surface"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.402.831 2.755 1.246 4.195 1.246h.001c5.479 0 9.94-4.461 9.943-9.94 0-2.652-1.032-5.145-2.906-7.02s-4.367-2.906-7.021-2.906c-5.48 0-9.941 4.461-9.943 9.941-.001 1.574.373 2.894 1.106 4.16l-1.011 3.693 3.736-.98zm11.215-5.412c-.309-.154-1.829-.903-2.112-1.006-.283-.103-.49-.154-.695.154-.206.309-.798 1.006-.979 1.211-.18.206-.36.232-.67.077-.309-.154-1.305-.481-2.485-1.534-.919-.819-1.538-1.831-1.718-2.14-.181-.309-.018-.477.137-.63.14-.139.309-.36.463-.541.154-.181.206-.309.309-.515.103-.206.052-.386-.026-.541-.077-.154-.695-1.677-.953-2.293-.251-.599-.505-.518-.695-.527-.181-.01-.386-.01-.592-.01-.206 0-.541.077-.824.386-.283.309-1.082 1.056-1.082 2.575 0 1.52 1.107 2.987 1.262 3.193.154.206 2.179 3.328 5.278 4.664.737.318 1.311.507 1.758.649.741.235 1.415.202 1.947.123.593-.088 1.829-.747 2.086-1.468.257-.721.257-1.339.18-1.468-.077-.129-.283-.206-.592-.36z" />
        </svg>
      </div>
    </button>
  );
}

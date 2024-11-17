"use client";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 375"
      className={className}
    >
      <path
        fill="currentColor"
        d="M219.918 138.293a6.625 6.625 0 110 13.25 6.625 6.625 0 010-13.25zm0 22.367c8.457 0 15.312-6.855 15.312-15.312 0-8.458-6.855-15.313-15.312-15.313-8.454 0-15.31 6.855-15.31 15.313 0 8.457 6.856 15.312 15.31 15.312zM154.348 137.95a6.625 6.625 0 110 13.25 6.625 6.625 0 010-13.25zm0 21.937c8.457 0 15.312-6.856 15.312-15.313 0-8.457-6.855-15.309-15.312-15.309-8.457 0-15.309 6.852-15.309 15.309 0 8.457 6.852 15.313 15.309 15.313z"
      />
      <path
        fill="currentColor"
        d="M188.207 182.383s4.836-6.438 5.863-13.395c.087-.5.13-1.023.13-1.562 0-4.098-2.598-7.438-5.837-7.54a1.79 1.79 0 00-.156 0 1.79 1.79 0 00-.157.004c-3.234.101-5.836 3.437-5.836 7.539 0 .539.047 1.059.13 1.562 1.027 6.954 5.863 13.392 5.863 13.392z"
      />
      <path
        fill="currentColor"
        d="M169.07 194.031h-19.871c0 6.004 4.45 10.871 9.933 10.871 5.489 0 9.938-4.867 9.938-10.87zm19.14 58.524c5.489 0 9.934-4.864 9.934-10.864h-19.87c0 6.004 4.448 10.863 9.937 10.863zm14.649-22.73c5.484 0 9.933-4.868 9.933-10.868h-19.867c0 6 4.445 10.867 9.934 10.867zm-19.363-10.868h-19.867c0 6 4.445 10.867 9.933 10.867 5.489 0 9.934-4.867 9.934-10.867zm33.789-14.055c5.484 0 9.933-4.867 9.933-10.867h-19.867c0 6 4.445 10.867 9.934 10.867zm-28.856 0c5.484 0 9.933-4.867 9.933-10.867h-19.87c0 6 4.449 10.867 9.937 10.867z"
      />
      <path
        fill="currentColor"
        d="M97.746 83.121c14.613 6.313 27.738 2.598 40.758-3.523 15.328-7.207 31.297-11.883 48.48-12 18.778-.121 35.942 5.617 52.63 13.433 9.93 4.653 20.168 6.923 31.125 4.348 2.015-.472 4.594-2.8 5.777-1.43 1.856 2.145-.281 4.958-1.234 7.329-2.106 5.246-5.028 9.996-9.278 13.82-4.57 4.11-9.41 5.317-15.36 2.567-14.53-6.723-29.378-8.641-44.284-1.13-7.781 3.923-13.672 10.122-18.895 17.22-2.176-2.618-4.016-5.157-6.18-7.383-14.973-15.391-33.868-18.704-54.957-9.743-9.649 4.106-14.477 3.043-20.89-5.234-4-5.164-7.438-10.734-7.692-18.27z"
      />
      <path
        fill="#A366CC"
        d="M151.777 166.508c-14.195 0-25.703-11.508-25.703-25.703 0-14.196 11.508-25.704 25.703-25.704 14.196 0 25.704 11.508 25.704 25.704 0 14.195-11.508 25.703-25.704 25.703zm-8.535-57.067c-8.746 3.075-16.348 8.477-22.809 16.215-3.676 5.762-5.808 12.61-5.808 19.95 0 8.5 2.855 16.328 7.656 22.59-5.516 10.406-8.645 22.27-8.645 34.87 0 41.185 33.383 74.567 74.571 74.567 41.18 0 74.567-33.382 74.567-74.566 0-13.036-3.348-25.286-9.227-35.946 4.32-6.07 6.863-13.496 6.863-21.516 0-7.48-2.215-14.445-6.02-20.277l.481.332c-5.215-7.961-12.84-13.348-22.875-16.168-2.805-.672-5.727-1.032-8.735-1.032-16.992 0-31.324 11.41-35.742 26.984-4.422-15.578-18.75-26.984-35.742-26.984-2.942 0-5.797.343-8.535.984zm-20.508 59.324c6.809 8.524 17.285 13.985 29.043 13.985 11.938 0 22.567-5.633 29.364-14.39-.059-.313-.114-.626-.161-.938-.105-.626-.16-1.266-.16-1.93 0-4.778 2.863-8.707 6.55-9.231.048-.168.098-.332.149-.5.043.156.09.309.137.46.12-.007.238-.015.36-.019.066-.003.128-.003.19-.003.063 0 .13 0 .192.004 3.992.125 7.195 4.238 7.195 9.29 0 .66-.054 1.304-.16 1.925-.113.766-.266 1.523-.45 2.277 6.817 7.99 16.954 13.055 28.274 13.055 11.781 0 22.277-5.485 29.086-14.04-3.043 3.957-6.88 7.274-11.278 9.703 3.496 7.489 5.453 15.836 5.453 24.641 0 32.21-26.105 58.316-58.312 58.316s-58.316-26.105-58.316-58.316c0-8.579 1.855-16.723 5.179-24.059-4.836-2.46-9.047-5.972-12.332-10.234zm100.012-2.258c-14.2 0-25.703-11.508-25.703-25.703 0-14.196 11.507-25.704 25.703-25.704 14.195 0 25.703 11.508 25.703 25.704 0 14.195-11.508 25.703-25.703 25.703z"
      />
      <path
        fill="#A366CC"
        d="M144.5 307.273h16.043s.96-1.352 2.882-4.066c.657-.977 1.2-1.848 1.801-2.668 5.04-6.868 4.941-6.774-.508-13.18-1.684-1.977-2.477-1.531-3.723.156-3 4.074-6.223 7.988-9.059 12.168-.242.36-.488.688-.742.996-.301.367-.61.703-.934 1-.031.219-1.953 2.083-3.875 3.653-1.832 1.57-3.754 3.434-5.785 5.594z"
      />
      <path
        fill="currentColor"
        d="M142.691 303.379l-3.96 3.422-.298.176-.511.19-.34.064-36.317-.004v.008h-.98c-.16 0 .004-.004-.47 0l-.703-.008a9.905 9.905 0 00-.594-.011c-.215-.004-.406-.004-.578-.012-.078 0-.133 0-.16-.004-.024 0-.075-.004-.165-.012-.492-.043-.941-.16-1.332-.336-.117-.055-.23-.11-.336-.172l-.11.097-.652-.71c-.308-.337-.539-.727-.687-1.161-.141-.41-.207-.864-.195-1.356l.004-.16.008-.141.078-.895h.117c.05-.149.11-.29.18-.422.21-.407.507-.754.87-1.04.34-.265.727-.46 1.149-.59.402-.117.84-.175 1.312-.171 1.32.011 2.641.003 3.961-.004h.157c1.457-.008 1.777-.012 2.316-.012 5.7 0 8.25-.008 10.797-.02h.082c4.39-.016 8.785-.028 13.172-.024 4.402.008 8.796.035 13.187.105h.676l.957 2.641-.637.555zm93.407 3.403l-4.618-3.997.977-2.64.683-.005c3.477-.016 6.961-.028 10.445-.032 3.48-.008 6.96-.008 10.441-.008 3.484.004 6.965.012 10.445.024 3.488.011 6.969.027 10.445.046.063 0 .172-.007.313-.027.242-.027.359-.047.468-.066h.012c.39-.063.797-.125 1.203-.145.898-.047 1.762.066 2.477.582.726.53 1.214 1.41 1.289 2.851.077 1.457-.274 2.422-.88 3.062-.632.664-1.472.91-2.394.961-.328.016-.637.004-.93-.023v-.004c-.316-.027-.578-.062-.832-.097-.328-.043-.64-.086-.824-.086l-9.395.011c-9.39.008-18.785.016-28.18.02l-.34-.059-.512-.192-.301-.176zM177.547 297.934c-3.828 7.167-7.043 3.116-11.453 9.34 14.223 0 28.442 0 42.656-.008-4.543-6.41-7.622-1.645-11.711-8.977-2.14-3.844-5.414-7.036-7.895-10.715-1.598-2.375-2.527-1.953-3.953.035-2.496 3.484-5.652 6.59-7.644 10.325zm52.805 9.34c-5.348 0-10.696 0-16.044 0 0 0-.96-1.352-2.883-4.066-.656-.977-1.199-1.848-1.8-2.668-5.04-6.868-4.942-6.774.507-13.18 1.684-1.977 2.477-1.531 3.723.156 3 4.074 6.223 7.988 9.063 12.168.242.36.488.688.742.996.297.367.61.703.93 1 2.035 2.16 3.956 4.024 5.769 5.594z"
      />
    </svg>
  );
}
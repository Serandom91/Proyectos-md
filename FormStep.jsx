import React, { useState } from 'react';
import './styles.css';

/* ============================================================
   ÍCONOS SVG — reutilizables
   ============================================================ */
const IconChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="#333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#333" strokeWidth="1.5"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconUploadCloud = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M21.3 21.3H24a5.3 5.3 0 0 0 0-10.7h-.1a.8.8 0 0 1-.8-.6A8 8 0 1 0 8.3 14" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 21.3V16" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 18.7 16 16l3 2.7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconFileText = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconAlertTriangle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#D32F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="9" x2="12" y2="13" stroke="#D32F2F" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="17" r="0.5" stroke="#D32F2F" strokeWidth="1.5"/>
  </svg>
);

const IconTrash = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11v6M14 11v6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconRefresh = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M1 4v6h6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.51 15a9 9 0 1 0 .49-4.5L1 10" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconDollar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconInfo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5"/>
    <path d="M12 16v-4" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="0.5" stroke="#333" strokeWidth="2"/>
  </svg>
);

const IconInfoSmall = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="#333" strokeWidth="1.4"/>
    <line x1="8" y1="7.5" x2="8" y2="11" stroke="#333" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="8" cy="5.5" r="0.8" fill="#333"/>
  </svg>
);

const IconArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" stroke="#0067B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLogOut = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M13 6.5L16.5 10L13 13.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 10H16.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7.5 3.5H4a.67.67 0 0 0-.67.67V15.83a.67.67 0 0 0 .67.67H7.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* ============================================================
   COMPONENTE: Popover / Tooltip
   ============================================================ */
function Popover({ text }) {
  return (
    <div className="popover" role="group" aria-label="Más información">
      <button className="popover__trigger" type="button" aria-label="Más información sobre este campo">
        <IconInfoSmall />
      </button>
      <div className="popover__tooltip" role="tooltip">
        {text}
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENTE: Campo de texto / select
   ============================================================ */
function Field({ label, placeholder, value, icon, helper, helperWrap, labelWrap, tooltip, iconLeft, paddingTop }) {
  const isFilled = Boolean(value);
  return (
    <div className={`field field--flex${paddingTop ? ' field--pt' : ''}`}>
      <div className="field__label-row">
        <label className={`field__label${labelWrap ? ' field__label--wrap' : ''}`}>{label}</label>
        {tooltip && <Popover text={tooltip} />}
      </div>
      <div className={`field__input-box${isFilled ? ' field__input-box--filled' : ''}`}>
        {iconLeft && <span className="field__icon">{iconLeft}</span>}
        <span className={`field__value${!value ? ' field__value--placeholder' : ''}`}>
          {value || placeholder}
        </span>
        {icon && <span className="field__icon">{icon}</span>}
      </div>
      {helper && (
        <span className={`field__helper${helperWrap ? '' : ''}`}>{helper}</span>
      )}
    </div>
  );
}

/* ============================================================
   COMPONENTE: Archivo subido
   ============================================================ */
function UploadedFile({ name, meta, hasError, onAction }) {
  return (
    <div className="uploaded-file">
      <div className="uploaded-file__info">
        {hasError ? <IconAlertTriangle /> : <IconFileText />}
        <div className="uploaded-file__meta-block">
          <p className="uploaded-file__name">{name}</p>
          <p className={`uploaded-file__size${hasError ? ' uploaded-file__size--error' : ''}`}>
            {meta}
          </p>
        </div>
      </div>
      <button className="uploaded-file__action" type="button" onClick={onAction}
        aria-label={hasError ? 'Reintentar carga' : 'Eliminar archivo'}>
        {hasError ? <IconRefresh /> : <IconTrash />}
      </button>
    </div>
  );
}

/* ============================================================
   COMPONENTE: Zona de carga de archivos
   ============================================================ */
function UploadField({ label, uploadedFiles, progress }) {
  return (
    <div className="upload-field">
      <span className="upload-field__label">{label}</span>

      <div className="upload-dropzone" role="button" tabIndex={0} aria-label="Subir archivo">
        <IconUploadCloud />
        {progress !== undefined ? (
          <div className="progress-wrap">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="progress-label">{progress}%</span>
          </div>
        ) : (
          <p className="upload-dropzone__text">
            Arrastra un archivo aquí o selecciona desde tu computador
          </p>
        )}
      </div>

      <p className="upload-disclaimer">
        Formatos válidos: PDF, JPG y PNG. Recuerda que el archivo NO debe tener contraseña ni estar encriptado.
      </p>

      {uploadedFiles && uploadedFiles.length > 0 && (
        <>
          <span className="upload-files-title">Archivos subidos</span>
          {uploadedFiles.map((file, i) => (
            <UploadedFile key={i} {...file} />
          ))}
        </>
      )}
    </div>
  );
}

/* ============================================================
   COMPONENTE: Stepper
   ============================================================ */
function Stepper({ current, total, stepLabel }) {
  return (
    <div className="stepper">
      <div className="stepper__bars">
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className={`stepper__bar${i < current ? ' stepper__bar--active' : ''}`} />
        ))}
      </div>
      <div className="stepper__label">
        <strong>Paso {current} de {total}:</strong>
        <span>{stepLabel}</span>
      </div>
    </div>
  );
}

/* ============================================================
   COMPONENTE: Header
   ============================================================ */
function Header({ onAbandon }) {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__logo">
          <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_119)">
              <path d="M0 12.0087L5.30306 6.64163V17.3705L0 12.0087Z" fill="#FFCF00"/>
              <path d="M11.3955 18.3035V23.53L5.97087 18.026V12.7994L11.3955 18.3035Z" fill="#FFCF00"/>
              <path d="M6.44006 5.49362L11.4041 0.473389V5.49362H6.44006Z" fill="#FFCF00"/>
              <path d="M11.4024 6.16299H5.96918V11.6566H11.4024V6.16299Z" fill="#FFCF00"/>
              <path d="M6.44006 12.3277H11.4041V17.348L6.44006 12.3277Z" fill="#FFCF00"/>
              <path d="M23.1283 -7.62939e-06L12.0684 11.2023V-7.62939e-06H23.1283Z" fill="#FFCF00"/>
              <path d="M12.0547 24V12.7994L23.1146 24H12.0547Z" fill="#FFCF00"/>
              <path d="M30.3132 16.2989C29.106 16.2989 28.1095 15.8913 27.2858 15.0954C26.4811 14.2804 26.0787 13.2711 26.0787 12.0486C26.0787 10.826 26.4811 9.81677 27.3047 9.00175C28.1283 8.18672 29.1249 7.7792 30.3132 7.7792C31.6745 7.7792 32.8047 8.28383 33.7053 9.31215L35.7173 7.58498C34.356 6.01388 32.4399 5.06186 30.3132 5.06186C28.3013 5.06186 26.6146 5.72082 25.2157 7.06128C23.8167 8.40001 23.1266 10.0491 23.1266 12.0486C23.1266 14.048 23.8167 15.6971 25.2157 17.0359C26.6146 18.3555 28.3013 19.0145 30.3132 19.0145C32.4399 19.0145 34.3749 18.0832 35.7362 16.4723L33.7242 14.7451C32.8235 15.7734 31.6934 16.2971 30.3132 16.2971V16.2989ZM41.1009 8.73123C39.606 8.73123 38.3406 9.23585 37.2875 10.2451C36.2533 11.2353 35.7362 12.4578 35.7362 13.9127C35.7362 15.3676 36.2533 16.5902 37.2875 17.5994C38.3423 18.5896 39.606 19.0942 41.1009 19.0942C42.5957 19.0942 43.8406 18.5896 44.8954 17.5994C45.9502 16.5902 46.4673 15.3676 46.4673 13.9127C46.4673 12.4578 45.9502 11.2353 44.8954 10.2451C43.8406 9.23585 42.5769 8.73123 41.1009 8.73123ZM42.8834 15.737C42.4039 16.2226 41.8098 16.474 41.1009 16.474C40.392 16.474 39.7978 16.2226 39.3183 15.737C38.8389 15.2515 38.5906 14.6306 38.5906 13.9127C38.5906 13.1948 38.8389 12.5931 39.3183 12.1075C39.7978 11.6029 40.392 11.3497 41.1009 11.3497C41.8098 11.3497 42.4039 11.6012 42.8834 12.1075C43.3628 12.5931 43.6111 13.1931 43.6111 13.9127C43.6111 14.6324 43.3611 15.2324 42.8834 15.737ZM50.0323 15.1734V5.27689H47.1779V15.6208C47.1779 17.9116 48.2704 19.0561 50.4741 19.0561L51.8354 19.0596V16.4359C50.3406 16.4359 50.0341 16.0474 50.0341 15.1752H50.0323V15.1734ZM70.8405 15.3676V9.02255H67.986V14.5145C67.986 15.659 67.2583 16.4549 66.2035 16.4549C65.1487 16.4549 64.5357 15.7561 64.5357 14.6116V9.02255H61.6813V14.9601C61.6813 17.5023 63.0426 19.0162 65.4758 19.0162C66.8747 19.0162 67.8319 18.5306 68.3114 17.5804C68.4449 17.9879 68.7326 18.3382 69.1744 18.6278C69.5768 18.8601 70.1127 18.9763 70.7463 18.9763C71.3028 18.9763 71.724 18.9174 72.0305 18.822V16.415C72.0305 16.415 71.6864 16.4168 71.5511 16.4168C71.034 16.4168 70.8422 16.1428 70.8422 15.3659L70.8405 15.3676ZM78.6384 8.84741C77.1829 8.84741 76.0511 9.44914 75.7634 10.3023V5.27689H72.909V18.8029H75.7634V17.5214C76.0511 18.3746 77.1812 18.9763 78.6384 18.9763C79.9997 18.9763 81.1487 18.4908 82.0493 17.5214C82.9689 16.5312 83.4295 15.3278 83.4295 13.9127C83.4295 12.4977 82.9689 11.2925 82.0493 10.3231C81.1487 9.33296 79.9997 8.84914 78.6384 8.84914V8.84741ZM79.8644 15.659C79.385 16.1254 78.8096 16.3578 78.1213 16.3578C77.4329 16.3578 76.8182 16.1254 76.3199 15.659C75.8405 15.1734 75.5922 14.5925 75.5922 13.9127C75.5922 13.233 75.8405 12.652 76.3199 12.1856C76.8182 11.7 77.4124 11.4676 78.1213 11.4676C78.8302 11.4676 79.3867 11.7 79.8644 12.1856C80.3439 12.6503 80.5733 13.233 80.5733 13.9127C80.5733 14.5925 80.3439 15.1734 79.8644 15.659ZM89.599 13.0006C88.5253 12.6122 87.7206 12.4769 87.3575 12.3208C87.051 12.1856 86.9551 12.0486 86.9551 11.7971C86.9551 11.4278 87.2993 11.1763 87.914 11.1763C88.7377 11.1763 89.4277 11.4087 89.9449 11.8942L91.3062 9.99192C90.4431 9.15781 89.3524 8.73123 87.9911 8.73123C86.9363 8.73123 86.0562 9.00348 85.3267 9.56533C84.599 10.1081 84.2343 10.885 84.2343 11.8752C84.2343 13.1757 84.9808 14.0688 86.4569 14.5925C86.7445 14.6896 87.1846 14.8249 87.7599 14.9619C88.3353 15.0971 88.7188 15.2341 88.9294 15.3503C89.1401 15.4665 89.2548 15.6226 89.2548 15.8168C89.2548 16.3405 88.7753 16.6127 87.7976 16.6127C86.7051 16.6127 85.6897 16.1861 85.1538 15.5445L83.5065 17.3306C84.4449 18.4942 85.8438 19.0769 87.7223 19.0769C90.5579 19.0769 91.9757 17.7763 91.9757 15.7786C91.9757 14.478 91.1897 13.5468 89.599 13.0041V13.0006ZM58.6162 13.0006C57.5426 12.6122 56.7378 12.4769 56.3748 12.3208C56.0683 12.1856 55.9724 12.0486 55.9724 11.7971C55.9724 11.4278 56.3166 11.1763 56.9313 11.1763C57.7549 11.1763 58.445 11.4087 58.9621 11.8942L60.3234 9.99192C59.4604 9.15781 58.3696 8.73123 57.0083 8.73123C55.9535 8.73123 55.0734 9.00348 54.344 9.56533C53.6162 10.1081 53.2515 10.885 53.2515 11.8752C53.2515 13.1757 53.9981 14.0688 55.4741 14.5925C55.7618 14.6896 56.2018 14.8249 56.7772 14.9619C57.3525 15.0989 57.7361 15.2341 57.9467 15.3503C58.1573 15.4665 58.272 15.6226 58.272 15.8168C58.272 16.3405 57.7926 16.6127 56.8148 16.6127C55.7224 16.6127 54.707 16.1861 54.171 15.5445L52.5238 17.3306C53.4621 18.4942 54.8611 19.0769 56.7395 19.0769C59.5751 19.0769 60.9929 17.7763 60.9929 15.7786C60.9929 14.478 60.207 13.5468 58.6162 13.0041V13.0006ZM94.3712 8.18845C95.2719 8.18845 95.9996 7.47053 95.9996 6.55839C95.9996 5.64625 95.2719 4.90926 94.3712 4.90926C93.4705 4.90926 92.7428 5.62718 92.7428 6.55839C92.7428 7.48961 93.4705 8.18845 94.3712 8.18845ZM96.0887 16.2989C95.9756 16.2191 95.9106 16.0925 95.8729 15.9624C95.8164 15.7717 95.8079 15.5671 95.8079 15.3694V9.02429H92.9534V16.2243C92.9534 18.0676 93.7959 18.9798 95.4825 18.9798H96.8044V16.4202C96.7496 16.4168 96.6931 16.4133 96.6383 16.4116C96.4534 16.3994 96.2479 16.4116 96.0887 16.3006V16.2989ZM107.688 15.3694V5.27862H104.833V10.3041C104.546 9.45088 103.416 8.84914 101.959 8.84914C100.597 8.84914 99.4482 9.33469 98.5287 10.3231C97.628 11.2942 97.1674 12.496 97.1674 13.9127C97.1674 15.3295 97.628 16.552 98.5287 17.5422C99.4482 18.5133 100.599 18.9971 101.959 18.9971C103.472 18.9971 104.527 18.5324 105.159 17.5804C105.292 17.9879 105.58 18.3382 106.022 18.6278C106.424 18.8601 106.96 18.9763 107.594 18.9763C108.15 18.9763 108.878 18.9798 108.878 18.9798V16.4133C108.878 16.4133 108.534 16.415 108.399 16.415C107.881 16.415 107.69 16.1411 107.69 15.3642V15.3694H107.688ZM104.258 15.6607C103.779 16.1272 103.185 16.3595 102.476 16.3595C101.767 16.3595 101.21 16.1272 100.732 15.6607C100.253 15.1752 100.024 14.5942 100.024 13.9145C100.024 13.2347 100.253 12.6538 100.732 12.1873C101.212 11.7017 101.786 11.4694 102.476 11.4694C103.166 11.4694 103.779 11.7017 104.258 12.1873C104.756 12.652 105.006 13.2347 105.006 13.9145C105.006 14.5942 104.756 15.1752 104.258 15.6607ZM123 10.2468C121.945 9.23758 120.681 8.73296 119.205 8.73296C117.729 8.73296 116.445 9.23758 115.392 10.2468C114.357 11.237 113.84 12.4595 113.84 13.9145C113.84 15.3694 114.357 16.5919 115.392 17.6012C116.446 18.5913 117.71 19.096 119.205 19.096C120.7 19.096 121.945 18.5913 123 17.6012C124.054 16.5919 124.571 15.3694 124.571 13.9145C124.571 12.4595 124.054 11.237 123 10.2468ZM120.988 15.7387C120.508 16.2243 119.914 16.4757 119.205 16.4757C118.496 16.4757 117.902 16.2243 117.422 15.7387C116.943 15.2532 116.695 14.6324 116.695 13.9145C116.695 13.1965 116.943 12.5948 117.422 12.1093C117.902 11.6046 118.496 11.3515 119.205 11.3515C119.914 11.3515 120.508 11.6029 120.988 12.1093C121.467 12.5948 121.715 13.1948 121.715 13.9145C121.715 14.6341 121.465 15.2341 120.988 15.7387ZM110.885 8.19018C111.786 8.19018 112.513 7.47227 112.513 6.56013C112.513 5.64799 111.786 4.91099 110.885 4.91099C109.984 4.91099 109.256 5.62891 109.256 6.56013C109.256 7.49134 109.984 8.19018 110.885 8.19018ZM112.602 16.3006C112.489 16.2208 112.424 16.0942 112.387 15.9642C112.33 15.7734 112.321 15.5688 112.321 15.3711V9.02602H109.467V16.226C109.467 18.0694 110.31 18.9815 111.996 18.9815H113.318V16.422C113.263 16.4185 113.207 16.415 113.152 16.4133C112.967 16.4012 112.762 16.4133 112.602 16.3023V16.3006Z" fill="#0067B1"/>
            </g>
            <defs>
              <clipPath id="clip0_2_119">
                <rect width="124.571" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="header__divider" />
        <span className="header__title">Solicitud de Subsidio de Vivienda Nueva</span>
      </div>
      <div className="header__actions">
        <button className="btn-abandon" type="button" onClick={onAbandon}>
          Abandonar solicitud
          <IconLogOut />
        </button>
      </div>
    </header>
  );
}

/* ============================================================
   COMPONENTE PRINCIPAL: FormStep
   ============================================================ */
export default function FormStep({ onBack, onNext, onAbandon }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <Header onAbandon={onAbandon} />

      <main className="main">
        <div className="form-page">

          {/* Stepper */}
          <Stepper current={1} total={3} stepLabel="Formulario" />

          {/* Tarjeta del formulario */}
          <div className="form-card">

            {/* Encabezado */}
            <div className="form-heading">
              <h1 className="form-heading__title">Datos del afiliado</h1>
              <p className="form-heading__desc">
                Ingresa primero la información del afiliado a Colsubsidio. Para cada integrante,
                registra los datos tal como aparecen en el documento de identidad.
              </p>
            </div>

            {/* Caja de resultado */}
            <div className="result-box">
              <span className="result-box__category">Afiliado</span>
              <span className="result-box__name">Jonathan Ramos</span>
            </div>

            {/* Campos */}
            <div className="form-fields">

              {/* ROW 1 */}
              <div className="form-row">
                <Field
                  label="Nombre del afiliado titular"
                  value="Jonathan Ramos Quintero"
                  helper="Recuerda que puedes actualizar y/o modificar el nombre del afiliado titular."
                  tooltip="Lorem ipsum dolor sit amet consectetur. Dictum dui ut risus facilisi. Purus lectus in nunc ipsum vulputate etiam massa venenatis accumsan. Velit aliquet lobortis nunc aliquet amet vel enim. Nisi euismod eu nullam."
                />
                <Field
                  label="Tipo de documento"
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Selecciona el tipo de documento del afiliado, por ejemplo: CC, CE o PA."
                />
              </div>

              {/* ROW 2 */}
              <div className="form-row">
                <Field
                  label="Número de documento"
                  placeholder="Ej: 1020304050"
                  icon={<IconChevronDown />}
                  helper="Ingresa solo los dígitos, sin puntos ni espacios."
                />
                <Field
                  label="Fecha de nacimiento"
                  placeholder="Ej: 13/04/1986"
                  icon={<IconCalendar />}
                  helper="Usa el formato DD/MM/AAAA. Debe coincidir con tu documento de identidad."
                />
              </div>

              {/* ROW 3 */}
              <div className="form-row">
                <Field
                  label="Género"
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Selecciona el género registrado en tu documento de identidad."
                />
              </div>

              {/* ROW 4: Upload Adjuntar documento */}
              <div className="form-row">
                <UploadField
                  label="Adjuntar documento"
                  uploadedFiles={[
                    { name: 'Archivo 1.pdf', meta: '2mb', hasError: false },
                    { name: 'Archivo 1.pdf', meta: 'Error en la subida, intenta nuevamente', hasError: true },
                  ]}
                />
              </div>

              {/* ROW 5 */}
              <div className="form-row">
                <Field
                  label="Estado civil"
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Selecciona el estado civil actual del afiliado titular."
                  paddingTop
                />
                <Field
                  label="¿Cuentas con el registro civil de matrimonio y registro civil de defunción?"
                  labelWrap
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Es necesario que cuentes con el registro de matrimonio y registro civil de defunción a fin de acreditar su estado civil, sin estos documentos no podrás continuar tu solicitud."
                />
              </div>

              {/* ROW 6: Upload Registro civil (con progreso) */}
              <div className="form-row">
                <UploadField
                  label="Registro civil de matrimonio"
                  progress={45}
                />
              </div>

              {/* ROW 7: Upload Acta de defunción */}
              <div className="form-row">
                <UploadField
                  label="Acta de defunción"
                  uploadedFiles={[
                    { name: 'Archivo 1.pdf', meta: '2mb', hasError: false },
                  ]}
                />
              </div>

              {/* Sección: Información laboral */}
              <h2 className="section-title">Información laboral</h2>

              {/* ROW 8 */}
              <div className="form-row">
                <Field
                  label="Ocupación"
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Selecciona la actividad laboral principal que desempeñas actualmente."
                />
                <Field
                  label="Ingresos mensuales"
                  placeholder="Ej: 3.500.000"
                  iconLeft={<IconDollar />}
                  helper="Ingresa el monto total de tus ingresos mensuales en pesos colombianos (COP)."
                />
              </div>

              {/* ROW 9: Upload Certificación laboral */}
              <div className="form-row">
                <UploadField label="Certificación laboral" />
              </div>

              {/* ROW 10 */}
              <div className="form-row">
                <Field
                  label="¿Con cuál de las siguientes opciones reportarás tus ingresos mensuales?"
                  labelWrap
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Selecciona el documento con el que sustentarás tus ingresos ante Colsubsidio."
                />
                <Field
                  label="¿El pago de tus prestaciones de ley las realizas a través de un tercero?"
                  labelWrap
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Indica si una empresa temporal u otro tercero gestiona el pago de tus prestaciones sociales."
                />
              </div>

              {/* ROW 11: Upload Desprendible */}
              <div className="form-row">
                <UploadField label="Desprendible último pago mesada pensional" />
              </div>

              {/* ROW 12 */}
              <div className="form-row">
                <Field
                  label="¿Devengas otros ingresos?"
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Indica si recibes ingresos adicionales fuera de tu actividad laboral principal."
                />
                <Field
                  label="Condición social"
                  placeholder="Selecciona una opción"
                  icon={<IconChevronDown />}
                  helper="Selecciona si aplicas a alguna condición especial requerida para acceder al subsidio."
                />
              </div>

              {/* Alerta informativa */}
              <div className="alert alert--info" role="alert">
                <span className="alert__icon">
                  <IconInfo size={24} />
                </span>
                <p className="alert__text">
                  En caso de aplicar a una de estas condiciones, deberás anexar el documento que
                  acredite dicha condición en la sección de documentos.
                </p>
              </div>

            </div>{/* /form-fields */}

          </div>{/* /form-card */}

          {/* Acciones */}
          <div className="form-actions">
            <button className="btn-back" type="button" onClick={onBack}>
              <IconArrowLeft />
              Anterior
            </button>
            <button className="btn-next" type="button" onClick={onNext}>
              <span className="btn-next__label">Siguiente</span>
              <span className="btn-next__circle">
                <IconArrowRight />
              </span>
            </button>
          </div>

        </div>{/* /form-page */}
      </main>
    </>
  );
}

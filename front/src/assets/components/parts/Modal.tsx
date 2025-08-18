// Modal.tsx
import React from "react";
import "../../styles/modal.css";

interface Props {
  modal_id: string;
  modal_title: string;

  /** Tracks shown as a vertical numbered list */
  modal_list?: string[];

  /** Extra info shown under the list */
  modal_txt?: string;

  /** Bandcamp (or other) link shown just before the images */
  modal_link?: string;

  /** Preferred: pass any number of images (front, back, inserts, etc.) */
  modal_images?: string[];

  /** Legacy (still supported, but prefer modal_images) */
  modal_img_front?: string;
  modal_img_back?: string;
  modal_img?: string;
}

export default function Modal({
  modal_id,
  modal_title,
  modal_list,
  modal_txt,
  modal_link,
  modal_images,
  modal_img_front,
  modal_img_back,
  modal_img,
}: Props) {
  const mergedImages =
    modal_images && modal_images.length > 0
      ? modal_images
      : ([modal_img_front, modal_img_back, modal_img].filter(
          Boolean
        ) as string[]);

  const isExternal = (href: string) => /^(https?:)?\/\//i.test(href);

  return (
    <div
      className="modal fade"
      id={`${modal_id}-modal`}
      tabIndex={-1}
      aria-labelledby={`${modal_id}ModalLabel`}
      aria-hidden="true"
      data-bs-backdrop="true"
      data-bs-keyboard="true"
    >
      {/* Keep modal-fullscreen here if you enabled it earlier */}
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modal_id}ModalLabel`}>
              {modal_title}
            </h5>
            <button
              type="button"
              className="btn-close modal-close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            {/* Tracklist */}
            {Array.isArray(modal_list) && modal_list.length > 0 && (
              <ol className="tracklist">
                {modal_list.map((t, i) => (
                  <li key={i} className="track">
                    {t}
                  </li>
                ))}
              </ol>
            )}

            {/* Extra info */}
            {modal_txt && <p className="modal-extra">{modal_txt}</p>}

            {/* NEW: Bandcamp link (renders just before images) */}
            {modal_link && (
              <p className="modal-store">
                <a
                  className="modal-store-link"
                  href={modal_link}
                  target={isExternal(modal_link) ? "_blank" : undefined}
                  rel={
                    isExternal(modal_link) ? "noopener noreferrer" : undefined
                  }
                >
                  Available on Bandcamp
                </a>
              </p>
            )}

            {/* Images grid */}
            {mergedImages.length > 0 && (
              <div className="modal-images">
                {mergedImages.map((src, i) => (
                  <figure key={i} className="modal-figure">
                    <img src={src} alt="" className="modal-cover img-fluid" />
                  </figure>
                ))}
              </div>
            )}
          </div>

          <div className="modal-footer" />
        </div>
      </div>
    </div>
  );
}

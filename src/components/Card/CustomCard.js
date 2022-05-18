import React from 'react';
import { GoGraph } from "react-icons/go";
// import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/ri";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Card = (props) => {
  const { id, title, topFirstValue, topSecondValue, bottomFirstValue, bottomSecondValue, firstChangePercent, secondChangePercent } = props

  return (
    <>
      <div className="custom-card" >
        <div className="custom-card__header">
          <div className="custom-card__title">
            {title}
          </div>
          <div className="custom-card__icon">
            <GoGraph />
          </div>
        </div>
        <div className="custom-card__body">
          <div className="custom-card__content custom-card__content--top">
            <span className="custom-card__item">
              <span className="custom-card__item__title">
                Run Accuracy
              </span>
              <span className="custom-card__item__value">
                {topFirstValue}%
                {
                  firstChangePercent ?
                    Number(firstChangePercent) > 0 || Number(firstChangePercent) === 0 ?
                      <span className="custom-card__percent-change custom-card__percent-change--pos">
                        {/* positive */}
                        <MdOutlineArrowDropUp />
                        {Number(firstChangePercent)}%
                      </span>
                      :
                      <span className="custom-card__percent-change custom-card__percent-change--neg">
                        {/* negative */}
                        <MdOutlineArrowDropDown />
                        {Number(firstChangePercent.slice(1))}%
                      </span>
                    :
                    ''
                }


              </span>
            </span>
            <span className="custom-card__item">
              <span className="custom-card__item__title">
                Average
              </span>
              <span className="custom-card__item__value">
                {topSecondValue}%
              </span>
            </span>
          </div>
          <hr className="custom-card__divider" />
          <div className="custom-card__content custom-card__content-bottom">
            <span className="custom-card__item">
              <span className="custom-card__item__title">
                Run Fill rate
              </span>
              <span className="custom-card__item__value">
                {bottomFirstValue}%
                {
                  secondChangePercent ?
                    Number(secondChangePercent) > 0 || Number(secondChangePercent) === 0 ?
                      <span className="custom-card__percent-change custom-card__percent-change--pos">
                        {/* positive */}
                        <MdOutlineArrowDropUp />
                        {Number(secondChangePercent)}%
                      </span>
                      :
                      <span className="custom-card__percent-change custom-card__percent-change--neg">
                        {/* negative */}
                        <MdOutlineArrowDropDown />

                        {Number(secondChangePercent.slice(1))}%
                      </span>
                    :
                    ''
                }

              </span>
            </span>
            <span className="custom-card__item">
              <span className="custom-card__item__title">
                Average
              </span>
              <span className="custom-card__item__value">
                {bottomSecondValue}%
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
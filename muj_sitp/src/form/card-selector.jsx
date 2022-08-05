import * as React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';

export const CardSelector = (props) => {
    const {value, valid} = props;
    const [cardHover, setCardHover] = React.useState('');

    const onMouseEnter = React.useCallback(
        (event) => setCardHover(event.currentTarget.getAttribute('for')),
        [setCardHover]
    );
    const onMouseLeave = React.useCallback(
        () => setCardHover(''),
        [setCardHover]
    );
    const onChange = React.useCallback(
        (event) => props.onChange({ value: event.currentTarget.value }),
        [props.onChange]
    );

    const filter = 'brightness(1.8) grayscale(1) opacity(.7)';
    const filterHover = 'brightness(1.2) grayscale(.5) opacity(.9)';
    const cardStyle = {
        cursor: 'pointer',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'inline-block',
        width: 138,
        height: 70,
        border: '1px solid'
    };
    const visaStyle = {
        backgroundImage: 'url(https://image.flaticon.com/icons/svg/196/196578.svg)',
        filter: value === 'visa' ?
            'none' :
            cardHover ===  'visa' ? filterHover : filter,
        ...cardStyle
    };
    const masterCardStyle = {
        backgroundImage: 'url(https://image.flaticon.com/icons/svg/196/196561.svg)',
        filter: value === 'masterCard' ?
            'none' :
            cardHover ===  'masterCard' ? filterHover : filter,
        ...cardStyle
    };
    const paypalStyle = {
        backgroundImage: 'url(https://image.flaticon.com/icons/svg/196/196565.svg)',
        filter: value === 'paypal' ?
            'none' :
            cardHover ===  'paypal' ? filterHover : filter,
        ...cardStyle
    };
    const inputStyles = {
        visibility: 'hidden',
        position: 'absolute'
    };

    return (
      <FieldWrapper>
        <label className={`k-label${valid?'':' k-text-error'}`}>Payment Type</label>
        <ul className="k-radio-list k-list-horizontal">
          <li className="k-radio-item">
            <input
              onChange={onChange}
              checked={value === 'visa'}
              id="visa" type="radio"
              value="visa"
              name="paymentType"
              style={inputStyles}
                    />
            <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="visa" style={visaStyle} />
          </li>

          <li className="k-radio-item">
            <input
              onChange={onChange}
              checked={value === 'masterCard'}
              id="masterCard"
              type="radio"
              value="masterCard"
              name="paymentType"
              style={inputStyles}
                    />
            <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="masterCard" style={masterCardStyle} />
          </li>

          <li className="k-radio-item">
            <input
              onChange={onChange}
              checked={value === 'paypal'}
              id="paypal"
              type="radio"
              value="paypal"
              name="paymentType"
              style={inputStyles}
                    />
            <label onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} htmlFor="paypal" style={paypalStyle} />
          </li>
        </ul>
      </FieldWrapper>
    );
};

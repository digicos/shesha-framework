import { FC } from 'react';
export interface ICurrencyConverterProps {
    /**
     * The base currency to convert from
     */
    from: string;
    /**
     * The output currency to convert to
     */
    to: string;
    /**
     * The exhange rate
     */
    rate: number;
}
declare const CurrencyConverter: FC<ICurrencyConverterProps>;
export default CurrencyConverter;

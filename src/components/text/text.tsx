import React from 'react';
import '/src/index.css'

export interface TextProps {
    value: string;
}

function Text({ value }: TextProps) {
    console.log('TEXT value', value)
    return (
            <div className="m-3 rounded-xl shadow bg-white p-5  max-w-3xl">
                <div className="max-w-lg p-2 text-lg">
                    <div className="text-gray-700 antialiased">{ value }</div>
                </div>
            </div>
    );
}

export default Text;
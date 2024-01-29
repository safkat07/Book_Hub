import { useState } from 'react';
import FeatureSectionCard from '../../Pages/ExtraSections/FeatureSectionCard/FeatureSectionCard';

const UseTabPanel = ({ category }) => {
    const [dataLength] = useState(4)
    return (
        <div className='flex justify-center items-center gap-x-10 flex-wrap'>
            {
                category.slice(0, dataLength).map(cat => <FeatureSectionCard
                    {...cat}
                    key={cat._id}
                ></FeatureSectionCard>)
            }
        </div>
    );
};

export default UseTabPanel;
import { useMemo } from 'react';

const useTruncateText = (data, maxLength = 100) => {
    const truncatedData = useMemo(() => {
        return data.length > maxLength ? data.substring(0, maxLength) + "..." : data;
    }, [data, maxLength]);

    return truncatedData;
}

export default useTruncateText;
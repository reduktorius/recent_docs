import React from 'react';
import RecentItem from './RecentItem';

function RecentItemList({files}) {
    if (files.length) {
        return (
            files.map(item => {
                return <RecentItem file={item.file}/>
            })
        )
    } else {
        return <p>No recent files</p>
    }

}

export default RecentItemList;

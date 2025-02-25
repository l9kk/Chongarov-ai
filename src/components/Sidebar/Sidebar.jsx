import React, {useContext, useState} from 'react';
import './Sidebar.css';
import {assets} from '../../assets/assets';
import {Context} from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <aside className={`sidebar ${extended ? 'extended' : 'collapsed'}`}>
            <div className={`top  ${extended ? '' : 'centered'}`}>
                <div className="menu" onClick={() => setExtended(prev => !prev)}>
                    <img src={assets.menu_icon} alt="Menu Icon"/>
                </div>
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon"/>
                    <p className={`${extended ? 'block' : 'none'}`}>New Chat</p>
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt=""/>
                                    <p className="recent-entry-p">{item.slice(0, 18)} ...</p>
                                </div>
                            )
                        })}

                    </div>
                    : null
                }
            </div>
            <div className={`bottom  ${extended ? '' : 'centered'}`}>
                
            </div>
        </aside>
    );
}

export default Sidebar;

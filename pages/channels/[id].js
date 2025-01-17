import React from 'react';
import ChannelChatSection from '@/components/anyChannel/ChannelChatSection';
import ChannelInfoSection from '@/components/anyChannel/ChannelInfoSection';
import ChatArea from '@/components/anyChannel/ChatArea';
import ChannelPeoples from '@/components/anyChannel/ChannelPeoples';
import ChannelBar from '@/components/ChannelBar';

function Channel({ id }) {
  return (
    <div className='main'>
      <ChannelBar />
      <div className='section-2'>
        <ChannelChatSection />
        <div className='lists-section'>
          <ChannelInfoSection />
          <div className='peopleList'>
            <ChatArea />
            <ChannelPeoples />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;

Channel.getInitialProps = ({ query }) => {
  const id = query.id;
  return { id: id };
};

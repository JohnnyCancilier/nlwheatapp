import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Message, MessageProps } from '../Message';
import { api } from '../../services/api';


export function MessageList() {
    const [currentMessages, setCurrenteMessages] = useState<MessageProps[]>();

    useEffect(() => {
        async function fetchMessages() {
            const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
            setCurrenteMessages(messagesResponse.data);
        }

        fetchMessages();
    }, []);

    return (
        <ScrollView style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            {currentMessages?.map((message) => <Message key={message.id} data={message} />)}

        </ScrollView>
    );
}
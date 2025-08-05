import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Platform, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Merhaba! Ben AI Asistanınızım. Size nasıl yardımcı olabilirim?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: 'Mesajınızı aldım. Size nasıl yardımcı olabilirim?',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const renderMessage = (message) => (
    <View key={message.id} style={[
      styles.messageContainer,
      message.isUser ? styles.userMessage : styles.aiMessage
    ]}>
      <View style={[
        styles.messageBubble,
        message.isUser ? styles.userBubble : styles.aiBubble
      ]}>
        <Text style={[
          styles.messageText,
          message.isUser ? styles.userText : styles.aiText
        ]}>
          {message.text}
        </Text>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png' }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.headerTitle}>AI Asistan ile Sohbet</Text>
          <Text style={styles.headerSubtitle}>Sorularınızı yazın, AI asistanımız yanıtlasın</Text>
        </View>
      </View>
      
      <ScrollView style={styles.chatArea} showsVerticalScrollIndicator={false}>
        {messages.map(renderMessage)}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Mesajınızı yazın..."
          placeholderTextColor="#999"
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
          onPress={sendMessage}
          disabled={!inputText.trim()}
        >
          <Text style={styles.sendButtonText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F8EF7',
    paddingTop: Platform.OS === 'ios' ? 60 : 48,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 4,
    shadowColor: '#4F8EF7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 16, backgroundColor: '#fff' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', fontFamily: 'System' },
  headerSubtitle: { fontSize: 14, color: '#e0eaff', marginTop: 2, fontFamily: 'System' },
  chatArea: { flex: 1, paddingHorizontal: 16, paddingVertical: 8 },
  messageContainer: { marginVertical: 4, flexDirection: 'row' },
  userMessage: { justifyContent: 'flex-end' },
  aiMessage: { justifyContent: 'flex-start' },
  messageBubble: { maxWidth: '80%', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 18 },
  userBubble: { backgroundColor: '#4F8EF7' },
  aiBubble: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E8F0' },
  messageText: { fontSize: 16, fontFamily: 'System' },
  userText: { color: '#fff' },
  aiText: { color: '#222' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E3E8F0',
    shadowColor: '#4F8EF7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'System',
    color: '#222',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#4F8EF7',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  sendButtonDisabled: {
    backgroundColor: '#ccc',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'System',
  },
}); 
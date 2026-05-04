import { BlurView } from 'expo-blur';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addSymptomsStyles } from './AddSymptoms.styles';

export interface Symptom {
  title: string;
  description: string;
  date: string;
}

interface AddSymptomsProps {
  onAdd: (symptom: Symptom) => void;
}

const toDateInputValue = (d: Date) => d.toISOString().slice(0, 10);
const toTimeInputValue = (d: Date) => d.toTimeString().slice(0, 5);

export const AddSymptoms = ({ onAdd }: AddSymptomsProps) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const openForm = () => {
    const now = new Date();
    setDate(toDateInputValue(now));
    setTime(toTimeInputValue(now));
    setTitle('');
    setDescription('');
    setVisible(true);
  };

  const handleCancel = () => setVisible(false);

  const handleAdd = () => {
    if (!title.trim()) return;
    const parsed = new Date(`${date}T${time}`);
    const resolvedDate = isNaN(parsed.getTime())
      ? new Date().toString()
      : parsed.toString();
    onAdd({
      title: title.trim(),
      description: description.trim(),
      date: resolvedDate,
    });
    setVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={openForm} style={addSymptomsStyles.fab}>
        <Text style={addSymptomsStyles.fabLabel}>+ Add symptom</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <View style={addSymptomsStyles.overlay}>
          <BlurView
            intensity={100}
            tint="default"
            style={addSymptomsStyles.card}
          >
            <Text style={addSymptomsStyles.title}>Add Symptom</Text>

            <Text style={addSymptomsStyles.inputLabel}>Title *</Text>
            <TextInput
              style={addSymptomsStyles.input}
              placeholder="e.g. Feeling anxious"
              placeholderTextColor="rgba(248,248,255,0.4)"
              value={title}
              onChangeText={setTitle}
            />

            <Text style={addSymptomsStyles.inputLabel}>Description</Text>
            <TextInput
              style={[
                addSymptomsStyles.input,
                { height: 80, textAlignVertical: 'top' },
              ]}
              placeholder="Describe what you experienced…"
              placeholderTextColor="rgba(248,248,255,0.4)"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <Text style={addSymptomsStyles.inputLabel}>Date (YYYY-MM-DD)</Text>
            <TextInput
              style={addSymptomsStyles.input}
              value={date}
              onChangeText={setDate}
              keyboardType="numeric"
              placeholder="2025-01-30"
              placeholderTextColor="rgba(248,248,255,0.4)"
            />

            <Text style={addSymptomsStyles.inputLabel}>Time (HH:MM)</Text>
            <TextInput
              style={addSymptomsStyles.input}
              value={time}
              onChangeText={setTime}
              keyboardType="numeric"
              placeholder="14:30"
              placeholderTextColor="rgba(248,248,255,0.4)"
            />

            <View style={addSymptomsStyles.row}>
              <TouchableOpacity
                style={addSymptomsStyles.btnCancel}
                onPress={handleCancel}
              >
                <Text style={addSymptomsStyles.btnCancelLabel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={addSymptomsStyles.btnAdd}
                onPress={handleAdd}
              >
                <Text style={addSymptomsStyles.btnAddLabel}>Add</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </Modal>
    </>
  );
};

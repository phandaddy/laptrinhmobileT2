import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.divider} />

      {/* Label */}
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

title: {
  fontSize: 22,
  fontWeight: '600',
  marginBottom: 8,
},

  label: {
  fontSize: 16,
  fontWeight: '500',
  marginTop: 12,
  marginBottom: 6,
},

  desc: {
    fontSize: 13,
    color: '#777',
    marginBottom: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#eee',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '500',
  },

  divider: {
  height: 1,
  backgroundColor: '#e0e0e0',
  marginBottom: 16,
},

});


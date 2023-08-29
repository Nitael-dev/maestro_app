import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  input: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#9F9F9F32',
    marginTop: 16
  },
  button: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#646464',
    marginTop: 16
  },
  buttonTitle: {
    fontSize: 16,
    color: 'white'
  },
  success: {
    fontSize: 18,
    color: '#66FF26',
    fontWeight: 'bold',
    marginTop: 32
  }
});

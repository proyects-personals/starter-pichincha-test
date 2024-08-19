import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import CustomButton from "../common/custom/buttons/CustomButton";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    justifyContent: "center",
    paddingRight: 20,
    alignItems: "center",
    height: "100%",
    borderTopRightRadius: 20,
  },
  closeButtonText: {
    fontSize: 34,
    color: "#707074",
  },
  containerTitle: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "column",
    gap: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  customButton: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  closeButtonContainer: {
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  line: {
    height: 1,
    backgroundColor: "#F1F1F2",
    width: "100%",
  },
});

interface ConfirmationModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  productName: string;
  isLoading: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onConfirm,
  onCancel,
  productName,
  isLoading,
}) => {
  const confirmDelete = async () => {
    onConfirm();
  };

  const cancelDelete = () => {
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onCancel}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <View style={styles.containerTitle}>
            <Text style={styles.modalText}>
              ¿Estás seguro de eliminar el producto {productName}?
            </Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.modalButtons}>
            <CustomButton
              title="Confirmar"
              textColor="#253A6B"
              onPress={confirmDelete}
              loading={isLoading}
            />
            <CustomButton
              title="Cancelar"
              backgroundColor="#E9ECF3"
              textColor="#253A6B"
              onPress={cancelDelete}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;

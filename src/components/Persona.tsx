// import MainLayout from "@/layout/Layout";
// import { Button, Form, Input } from "antd";
// import { FormWithImageUploadAnt } from "./ImageUploadAnt";
// // import { SelectProps } from "antd";

// // interface CustomSelectProps extends SelectProps {}

// export default function Persona() {
//   const [form] = Form.useForm();

//   const onFinish = (values: unknown) => {
//     console.log("Formulario enviado con valores:", values);
//   };

//   return (
//     <MainLayout>
//       <div>Persona</div>
//       <Form form={form} onFinish={onFinish} layout="vertical">
//         <Form.Item
//           name="image"
//           label="Sube una imagen"
//           rules={[{ required: true, message: "Por favor sube una imagen PNG" }]}
//         >
//           <FormWithImageUploadAnt />
//         </Form.Item>
//         <Form.Item name="prueba">
//           <Input type="email" />
//         </Form.Item>
//         <Button>Cancelar</Button>
//         <Button type="primary" htmlType="submit">
//           Guardar
//         </Button>
//       </Form>
//     </MainLayout>
//   );
// }
import MainLayout from "@/layout/Layout";
import { Button, Form, Input, Modal } from "antd";
import { FormWithImageUploadAnt } from "./ImageUploadAnt";
import { useState } from "react";

export default function Persona() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"save" | "cancel" | null>(null);

  const showModal = (type: "save" | "cancel") => {
    setActionType(type);
    setIsModalOpen(true); // Cambio visible a open
  };

  const handleOk = () => {
    if (actionType === "save") {
      form.submit(); // Submit the form if saving
    } else if (actionType === "cancel") {
      form.resetFields(); // Reset the form if cancelling
    }
    setIsModalOpen(false); // Close the modal
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: unknown) => {
    console.log("Formulario enviado con Justificación:", values);
    // showModal("save");
  };

  return (
    <MainLayout>
      <div>Persona</div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="image"
          label="Sube una imagen"
          rules={[{ required: true, message: "Por favor sube una imagen PNG" }]}
        >
          <FormWithImageUploadAnt />
        </Form.Item>
        <Form.Item name="prueba">
          <Input />
        </Form.Item>
        <Button onClick={() => showModal("cancel")}>Cancelar</Button>
        <Button type="primary" onClick={() => showModal("save")}>
          Guardar
        </Button>
      </Form>

      {/* Modal de confirmación */}
      <Modal
        title={
          actionType === "save" ? "Confirmar Guardado" : "Confirmar Cancelación"
        }
        open={isModalOpen} // Cambio visible a open
        onOk={handleOk}
        onCancel={handleCancel}
        okText={actionType === "save" ? "Guardar" : "Sí, Cancelar"}
        cancelText="No"
      >
        <p>
          {actionType === "save"
            ? "¿Está seguro de que desea guardar los cambios?"
            : "¿Está seguro de que desea cancelar y perder los cambios?"}
        </p>
      </Modal>
    </MainLayout>
  );
}

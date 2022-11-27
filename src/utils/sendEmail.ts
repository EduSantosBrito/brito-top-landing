type Body = {
  name: string | null;
  email: string | null;
  message: string | null;
};

const sendEmail = async (body: Body): Promise<boolean> => {
  try {
    if (body.email && body.message && body.name) {
      fetch("https://api.brito.top/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default sendEmail;

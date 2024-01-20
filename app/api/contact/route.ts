import { NextResponse, NextRequest } from "next/server";
import { transporter } from "@/lib/node-mailer";

export const POST = async (request: Request) => {
  const data = await request.json();
  try {
    const mail = await transporter.sendMail({
      from: "marketing@cyberdatapros.com",
      to: "jenner.e.thomas@gmail.com",
      subject: `Contact Request from ${data.name}`,
      html: `
            <p>Name: ${data.name} </p>
            <p>Email: ${data.email} </p>
            <p>Company: ${data.company} </p>
            <p>Email: ${data.phone} </p>
            <p>Message: ${data.message} </p>
            `,
    });

    return NextResponse.json({
      message: "Success: email was sent",
      status: 200,
    });
  } catch (error) {
    NextResponse.json({ message: "COULD NOT SEND MESSAGE", status: 500 });
  }
};

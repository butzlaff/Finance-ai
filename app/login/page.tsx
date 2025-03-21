import Image from "next/image";
import React from "react";
import LoginImg from "@/public/login.png";
import LogoSvg from "@/public/logo.svg";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="h-full w-full">
        <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8 text-white">
          <Image
            src={LogoSvg}
            alt="Logo image"
            width={173}
            height={39}
            className="mb-8"
          />
          <h1 className="mb-8 text-4xl font-bold">Bem-vindo</h1>
          {/* font-family: Mulish; font-weight: 700; font-size: 36px; line-height:
          100%; letter-spacing: 0%; */}
          <p className="mb-3 text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
          <SignInButton>
            <Button variant="outline" color="black">
              <LogInIcon className="mr-2" />
              Entrar com Google
            </Button>
          </SignInButton>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image src={LoginImg} alt="Login image" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;

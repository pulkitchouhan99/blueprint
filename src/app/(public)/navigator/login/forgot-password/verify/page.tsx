import Image from "next/image";
import BlueprintLogo from "@/app/assets/svg/BlueprintLogo";
import navigatorlogin from "@/app/assets/images/navigator-icon.png";
import Footer from "@/app/components/ui/footer";
import { Button } from "@/app/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const ForgotPasswordOtpPage = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-full flex flex-col bg-white flex-1/4">
        <div className="px-6 md:px-16 py-6 border-b border-gray-100">
          <BlueprintLogo />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 md:px-16 w-full">
          <div className="w-full max-w-[420px]">
            <div className="text-center mb-10">
              <h1 className="text-h3 font-medium text-black text-left pb-2">Verify OTP</h1>
              <p className="text-body-1 font-normal text-grey-900 text-left">
                Enter OTP which is sent to your
                <span className="font-medium text-[#004489] px-1 rounded">emma_95@gmail.com</span>
              </p>
            </div>

            <form className="">
              <div className="space-y-2">
                <label htmlFor="otp-input" className="text-body-2 font-medium text-grey-950">
                  Enter OTP <span className="text-red-primary">*</span>
                </label>
                <InputOTP maxLength={6} id="otp-input">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="text-caption-1 text-grey-600 p-2">
                Haven&apos;t received OTP yet?{" "}
                <span className="text-[#004489] font-medium underline cursor-pointer">Resend OTP</span>
              </div>

              <Button type="submit" variant="disabled" className="w-full h-[40px] mt-10" showIcon>
                Verify OTP
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Right Side - Background Image */}
      <div className="hidden lg:block relative w-full flex-1">
        <Image src={navigatorlogin} alt="Healthcare Navigator" fill className="object-cover" priority />
      </div>
    </div>
  );
};

export default ForgotPasswordOtpPage;

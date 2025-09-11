import Image from "next/image";
import BlueprintLogo from "@/app/assets/svg/BlueprintLogo";
import AvatarIcon from "@/app/assets/svg/AvatarIcon";
import navigatorlogin from "@/app/assets/images/navigator-icon.png";
import Footer from "@/app/components/ui/footer";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

const NavigatorForgotPassword = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-full flex flex-col bg-white flex-1/4">
        <div className="px-6 md:px-16 py-6 border-b border-gray-100">
          <BlueprintLogo />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 md:px-16 w-full">
          <div className="w-full max-w-[420px]">
            <div className="text-center mb-10">
              <h1 className="text-h3 font-medium text-black text-center pb-2">Forgot Password?</h1>
              <p className="text-body-1 font-normal text-grey-900 text-center">
                Enter your registered email to reset your password
              </p>
            </div>

            <form className="space-y-10">
              <Input
                id="navigatorId"
                type="email"
                label="Email ID"
                required
                defaultValue=""
                placeholder="Enter Email"
                inputPrefix={<AvatarIcon />}
              />

              <Button type="submit" className="w-full h-[40px]" variant="primary" showIcon>
                Continue
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

export default NavigatorForgotPassword;

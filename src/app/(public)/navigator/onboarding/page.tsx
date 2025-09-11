import Image from "next/image";
import BlueprintLogo from "@/app/assets/svg/BlueprintLogo";
import AvatarIcon from "@/app/assets/svg/AvatarIcon";
import navigatorlogin from "@/app/assets/images/navigator-icon.png";
import Footer from "@/app/components/ui/footer";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-full flex flex-col bg-white flex-1/4">
        <div className="px-6 md:px-16 py-6 border-b border-gray-100">
          <BlueprintLogo />
        </div>

        <div className="flex-1 flex items-center justify-center px-6 md:px-16 w-full">
          <div className="w-full max-w-[420px]">
            <div className="text-center mb-10">
              <h1 className="text-h3 font-medium text-black text-left">Hi Emma, Welcome</h1>
              <p className="text-body-1 font-normal text-grey-900 text-left">Sign in to access your account</p>
            </div>

            <form className="space-y-10">
              <Input
                id="navigatorId"
                type="email"
                label="Email ID"
                required
                disabled
                defaultValue="emma_95@gmail.com"
                placeholder=""
                inputPrefix={<AvatarIcon />}
              />

              <Button type="submit" className="w-full h-[40px]">
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
}

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Languages } from "lucide-react";

export default function LohithProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold tracking-tight">Lohith Singh K</h1>
          <p className="text-xl text-purple-300">Operations & Financial Services Professional</p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Experienced operations specialist with expertise in insurance administration, retirement plan
            processing, regulatory compliance, and financial back‑office operations.
          </p>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <Card className="bg-white/10 backdrop-blur-xl border-0">
            <CardContent className="p-4 flex items-center gap-3">
              <Phone />
              <span>8050750966</span>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-0">
            <CardContent className="p-4 flex items-center gap-3">
              <Mail />
              <span>lohithsingh42@gmail.com</span>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-0">
            <CardContent className="p-4 flex items-center gap-3">
              <MapPin />
              <span>Bangalore, India</span>
            </CardContent>
          </Card>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold flex items-center gap-2"><Briefcase/> Experience</h2>

          <Card className="bg-white/10 backdrop-blur-xl border-0">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">ICICI Lombard General Insurance</h3>
              <p className="text-purple-300">Back Office Executive – Operations</p>
              <p className="text-gray-300">
                Managed operational processing for Group Health Insurance and Group Personal Accident products,
                handled underwriting coordination, KYC verification, and high‑priority escalations while
                maintaining SLA compliance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border-0">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-bold">Wipro Ltd</h3>
              <p className="text-purple-300">Associate – Operations</p>
              <p className="text-gray-300">
                Managed retirement plan administration for Australian superannuation clients including withdrawals,
                issuance requests, and financial compliance processing.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold">Core Skills</h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Financial Operations",
              "Insurance Administration",
              "Retirement Plan Processing",
              "KYC Compliance",
              "Client Communication",
              "Stakeholder Coordination",
              "Process Auditing",
              "Excel Data Analysis",
              "Operational Reporting"
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold flex items-center gap-2"><GraduationCap/> Education</h2>

          <Card className="bg-white/10 backdrop-blur-xl border-0">
            <CardContent className="p-6">
              <p className="font-bold">Bachelor of Commerce (B.Com)</p>
              <p className="text-gray-300">SDC College — 80%</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* LANGUAGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold flex items-center gap-2"><Languages/> Languages</h2>
          <div className="flex gap-4">
            <span className="bg-purple-600 px-4 py-2 rounded-xl">English</span>
            <span className="bg-purple-600 px-4 py-2 rounded-xl">Kannada</span>
            <span className="bg-purple-600 px-4 py-2 rounded-xl">Hindi</span>
          </div>
        </motion.div>

        {/* FOOTER */}
        <div className="text-center pt-10 text-gray-400">
          © 2026 Lohith Singh K • Professional Portfolio
        </div>
      </div>
    </div>
  );
}

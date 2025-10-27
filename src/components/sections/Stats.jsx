import React from "react";
import { Trophy, Users, Clock } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <Trophy className="w-10 h-10 mx-auto text-indigo-600" />
          <h3 className="text-3xl font-bold mt-4">10+ Years</h3>
          <p className="text-gray-600">of trusted fumigation service</p>
        </div>
        <div>
          <Users className="w-10 h-10 mx-auto text-indigo-600" />
          <h3 className="text-3xl font-bold mt-4">500+ Clients</h3>
          <p className="text-gray-600">satisfied homes & businesses</p>
        </div>
        <div>
          <Clock className="w-10 h-10 mx-auto text-indigo-600" />
          <h3 className="text-3xl font-bold mt-4">24/7 Support</h3>
          <p className="text-gray-600">always available when needed</p>
        </div>
      </div>
    </section>
  );
}
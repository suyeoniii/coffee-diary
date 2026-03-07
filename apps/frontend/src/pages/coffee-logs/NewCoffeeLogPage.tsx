import { ArrowLeft, Star } from "lucide-react";
import { formatDateString } from "../../lib/date";

export function NewCoffeeLogPage() {
  return (
    <div>
      <div className="position:sticky top-0 mb-6 flex items-center justify-between">
        <button
          className="px-4text-sm flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-500"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-[#5b3922] px-4 py-3 text-sm font-semibold text-white hover:bg-[#4a2d1a] focus:outline-none"
          onClick={() => (window.location.href = "/logs/new")}
        >
          <span>Save Log</span>
        </button>
      </div>
      <h1 className="mb-2 text-2xl font-bold">New Coffee Log</h1>
      <span className="text-gray-400">
        {formatDateString(new Date().toISOString())}
      </span>
      {/* Form fields */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Info
      </label>
      <input
        type="title"
        placeholder="Title"
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
      />
      <input
        type="date"
        className="mt-4 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
      />
      <select className="mt-4 w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-400 focus:ring-2 focus:ring-[#5b3922] focus:outline-none">
        <option value="" className="text-gray-400">
          Brew Method
        </option>
        <option value="POUR_OVER">Pour over</option>
        <option value="OTHER">Other</option>
      </select>
      {/* brew parameter */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Brew Parameters
      </label>
      <input
        type="text"
        placeholder="Dripper"
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
      />
      <div className="mt-2 flex gap-2">
        <input
          type="text"
          placeholder="Grind Size"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        />
        <input
          type="number"
          placeholder="Bean Amount (g)"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        />
      </div>
      <div className="mt-2 flex gap-2">
        <input
          type="number"
          placeholder="Water Amount (g)"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        />
        <input
          type="number"
          placeholder="Water Temp (°C)"
          className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        />
      </div>
      {/* Steps */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Pour Steps
      </label>
      <div className="mt-1 flex gap-2">
        <input
          type="text"
          placeholder="Cumulative Amount (g)"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        />
        <input
          type="text"
          placeholder="Time (sec)"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        />
      </div>
      {/* memo */}
      <label className="mt-4 block text-sm font-medium text-gray-700">
        Memo
      </label>
      <textarea
        placeholder="Notes"
        className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-[#5b3922] focus:outline-none"
        rows={4}
      />
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Rating
        </label>
        <div className="mt-1 flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="text-gray-300 hover:text-yellow-400 focus:outline-none"
            >
              <Star className="h-6 w-6 fill-current" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

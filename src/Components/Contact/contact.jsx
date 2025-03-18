import React from 'react'

const Form = () => {

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Form submitted');

		// Collect form data
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());

		// Get textarea value
		const message = document.getElementById("message").value;
		data.message = message;

		const checkboxes = e.target.querySelectorAll('input[type="checkbox"]');
		const selectedOptions = [];

		checkboxes.forEach((checkbox) => {
			if (checkbox.checked) {
				const parentDiv = checkbox.closest('div');
				const optionText = parentDiv ? parentDiv.querySelector('p')?.textContent.trim() : '';
				if (optionText) {
					selectedOptions.push(optionText);
				}
			}
		});

		data.selectedOptions = selectedOptions.join(", ");


		// Validation
		if (!data.firstname || !data.lastname || !data.email || !data.tel || !data.country || !data.message) {
			alert('Please fill in all required fields');
			return;
		}

		console.log("Collected Data:", data);

		// Send email using EmailJS (Example)
		// const emailData = {
		//   service_id: "your_service_id",
		//   template_id: "your_template_id",
		//   user_id: "your_public_key",
		//   template_params: {
		//       from_name: `${data.firstname} ${data.lastname}`,
		//       from_email: data.email,
		//       phone: data.tel,
		//       company: data.company || "N/A",
		//       country: data.country,
		//       message: data.message,
		//       selected_options: data.selectedOptions || "None"
		//   }
		// };

		// try {
		//     const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
		//         method: "POST",
		//         headers: { "Content-Type": "application/json" },
		//         body: JSON.stringify(emailData),
		//     });

		//     if (response.ok) {
		//         alert("Your message has been sent successfully!");
		//     } else {
		//         alert("Failed to send message. Please try again.");
		//     }
		// } catch (error) {
		//     console.error("Error sending email:", error);
		//     alert("An error occurred. Please try again later.");
		// }
	};

	return (
		<section className="container mx-auto mb-16 flex items-center justify-center py-8 px-5 font-sans">
			<form onSubmit={handleSubmit} className="w-full max-w-3xl">
				<label className="block text-white font-semibold mb-3">
					Full Name <span className="text-red-500">(Required)</span>
				</label>
				<div className="flex flex-col lg:flex-row gap-6">
					<div className="w-full gap-6">
						<label className="block text-gray-400 text-sm mb-2">FirstName</label>
						<input
							type="text"
							name="firstname"
							className="w-full sm:w-full md:w-full lg:w-full h-14 md:h-20 rounded-lg bg-transparent backdrop-blur-lg shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 text-white placeholder-white/50 focus:outline-none"
						/>
					</div>
					<div className="w-full">
						<label className="block text-gray-400 text-sm mb-2">LastName</label>
						<input
							type="text"
							name="lastname"
							className="w-full sm:w-full md:w-full lg:w-full h-14 md:h-20 rounded-lg bg-transparent backdrop-blur-lg shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 text-white placeholder-white/50 focus:outline-none"
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-6 items-center mt-6">
					<div className="w-full">
						<label className="block text-white font-semibold mb-2">
							Email <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="email"
							name="email"
							className="w-full sm:w-full md:w-full lg:w-full h-14 md:h-20 rounded-lg bg-transparent backdrop-blur-lg
          shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 text-white placeholder-white/50 focus:outline-none"
						/>
					</div>
					<div className="w-full">
						<label className="block text-white font-semibold mb-2">
							Phone <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="tel"
							name="tel"
							className="w-full sm:w-full md:w-full lg:w-full h-14 md:h-20 rounded-lg bg-transparent backdrop-blur-lg
          shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 text-white placeholder-white/50 focus:outline-none"
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-6 items-center mt-6">
					<div className="w-full">
						<label className="block text-white font-semibold mb-2">Company</label>
						<input
							type="text"
							name="company"
							className="w-full sm:w-full md:w-full lg:w-full h-14 md:h-20 rounded-lg bg-transparent backdrop-blur-lg
          shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 text-white placeholder-white/50 focus:outline-none"
						/>
					</div>
					<div className="w-full">
						<label className="block text-white font-semibold mb-2">
							Country <span className="text-red-500">(Required)</span>
						</label>
						<input
							type="text"
							name="country"
							className="w-full sm:w-full md:w-full lg:w-full h-14 md:h-20 rounded-lg bg-transparent backdrop-blur-lg
          shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 text-white placeholder-white/50 focus:outline-none"
						/>
					</div>
				</div>

				<div className="my-10">
					<h2 className="font-medium text-xl text-white mb-3">
						Would you like to contact Iyke for the following?
					</h2>
					<div className="flex flex-col text-white font-normal text-lg gap-2">
						{["Real Estate", "FinTech", "EdTech", "MedTech",].map(
							(option, index) => (
								<div key={index} className="flex gap-3">
									<input type="checkbox" className="rounded-full" />
									<p>{option}</p>
								</div>
							)
						)}
					</div>
				</div>

				<div className="w-full flex flex-col">
					<label className="text-white font-semibold mb-3">Your message <span className="text-red-500">(Required)</span></label>
					<textarea
						id="message"
						className="w-full sm:w-full md:w-full lg:w-full h-40 md:h-52 rounded-lg bg-transparent backdrop-blur-lg 
        shadow-[0px_6px_7px_rgba(0,0,0,0.6)] px-4 py-4 text-white placeholder-white/50 focus:outline-none"
					/>
				</div>

				<div className="flex justify-center items-center bg-[#151345] mt-8 w-28 mx-auto rounded-lg shadow-2xl">
					<button type="submit" className="px-8 py-3 text-white">Submit</button>
				</div>
			</form>
		</section>
	)
}

export default Form

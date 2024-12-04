function updateTemplate() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const cityStateZip = document.getElementById("city-state-zip").value;
    const contact = document.getElementById("contact").value;

    const today = new Date().toLocaleDateString(); // Bugünün tarihini alır

    const template = `
Subject: Request for the Launch of a #LUNCETF

${name}
${address}
${cityStateZip}
${today}

To Whom It May Concern,

I am writing to express my strong support and interest in the creation of an ETF focused on Terra Luna Classic (#LUNC). As a dedicated member of the global cryptocurrency community and an investor who values innovation, I firmly believe that a #LUNCETF would be a transformative step for both the ecosystem and the broader market.

The Terra Luna Classic project has proven itself to be more than a cryptocurrency—it is a symbol of resilience, innovation, and community-driven growth. The introduction of an ETF would not only boost liquidity and accessibility but also align with the growing demand for transparent and regulated investment options within the crypto space.

A #LUNCETF would offer:

- Increased investor confidence by providing a regulated investment product.
- Enhanced visibility and adoption of $LUNC on a global scale.
- A unique opportunity to amplify its burn mechanism, contributing to long-term value creation.

The cryptocurrency industry is evolving rapidly, and ETFs are becoming a critical part of bridging traditional finance with decentralized technology. By launching a #LUNCETF, your company has the opportunity to lead this movement and set a new standard for innovation and growth.

I urge you to consider this proposal and take action toward making a #LUNCETF a reality. The potential benefits for both your company and the cryptocurrency ecosystem are immense, and the community would wholeheartedly support this initiative.

Thank you for your time and attention to this matter. I look forward to seeing your leadership in advancing the future of decentralized finance.

Sincerely,
${name}
${contact}
    `;

    document.getElementById("letter-template").value = template;

    // Kullanıcıya bildirim
    alert("Template updated successfully!");
}

function copyToClipboard(content) {
    navigator.clipboard.writeText(content)
        .then(() => {
            alert("Copied to clipboard: " + content);
        })
        .catch(err => {
            console.error("Error copying to clipboard: ", err);
        });
}

// Donate butonunun işlevi
document.getElementById("donate-btn").addEventListener("click", () => {
    const walletAddress = "terra15nke8ae5fstjxpvkxykfxazxgpjzcnhthm0gvh";
    navigator.clipboard.writeText(walletAddress)
        .then(() => {
            alert("Terra Classic wallet address copied to clipboard!");
            const logo = document.getElementById("terra-logo");
            logo.style.display = "block"; // Logoyu görünür yapar
        })
        .catch(err => console.error("Error copying wallet address:", err));
});


// Terra Classic logosuna tıklama işlevi
function copyWalletAddress() {
    const walletAddress = "terra15nke8ae5fstjxpvkxykfxazxgpjzcnhthm0gvh";
    navigator.clipboard.writeText(walletAddress)
        .then(() => {
            alert("Wallet address copied again!");
        })
        .catch(err => console.error("Error copying wallet address:", err));
}

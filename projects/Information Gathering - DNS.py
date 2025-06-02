import dns.resolver

domain = input("Domain you want to scan: ")

types = {
    "A": "IPv4 address of the domain",
    "AAAA": "IPv6 address of the domain",
    "NS": "Name server responding",
    "MX": "Mail server of the domain",
    "SOA": "Additional domain info"
}

for record_type, description in types.items():
    print(f"\n[+] Querying {record_type} records...")
    try:
        for answer in dns.resolver.resolve(domain, record_type):
            print(f"- {description}: {answer.to_text()}")
    except dns.resolver.NoAnswer:
        print(f"- No {record_type} records found for this domain.")
    except dns.resolver.NXDOMAIN:
        print("- The domain does not exist.")
        break
    except dns.exception.Timeout:
        print("- DNS query timed out.")
    except Exception as e:
        print(f"- Unknown error: {e}")

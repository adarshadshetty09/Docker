```
ubuntu@ip-172-31-4-120:~$ aws ec2 describe-instances --instance-ids i-000cbb23437fd0815 --query "Reservations[0].Instances[0].SecurityGroups[0].
GroupId"
"sg-02a2b1c4afe0b8bd2"
ubuntu@ip-172-31-4-120:~$
```

```
ubuntu@ip-172-31-4-120:~$
ubuntu@ip-172-31-4-120:~$ aws ec2 authorize-security-group-ingress --group-id sg-02a2b1c4afe0b8bd2 --protocol tcp --port 3036 --cidr 0.0.0.0/0
{
    "Return": true,
    "SecurityGroupRules": [
        {
            "SecurityGroupRuleId": "sgr-0d9a7f6df20539560",
            "GroupId": "sg-02a2b1c4afe0b8bd2",
            "GroupOwnerId": "378269940646",
            "IsEgress": false,
            "IpProtocol": "tcp",
            "FromPort": 3036,
            "ToPort": 3036,
            "CidrIpv4": "0.0.0.0/0",
            "SecurityGroupRuleArn": "arn:aws:ec2:ap-south-1:378269940646:security-group-rule/sgr-0d9a7f6df20539560"
        }
    ]
}
ubuntu@ip-172-31-4-120:~$

```